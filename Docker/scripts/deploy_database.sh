#!/bin/bash

source ./Docker/scripts/env_functions.sh

if [ "$DOCKER_ENV" != "true" ]; then
    export_env_vars
fi

if [[ "$DATABASE_PROVIDER" == "postgresql" || "$DATABASE_PROVIDER" == "mysql" || "$DATABASE_PROVIDER" == "psql_bouncer" ]]; then
    export DATABASE_URL
    echo "Deploying migrations for $DATABASE_PROVIDER"
    echo "Database URL: $DATABASE_URL"
    # rm -rf ./prisma/migrations
    # cp -r ./prisma/$DATABASE_PROVIDER-migrations ./prisma/migrations
    npm run db:deploy
    if [ $? -ne 0 ]; then
        echo "Migration failed"
        exit 1
    else
        echo "Migration succeeded"
    fi
    npm run db:generate
    if [ $? -ne 0 ]; then
        echo "Prisma generate failed"
        exit 1
    else
        echo "Prisma generate succeeded"
    fi
elif [[ "$DATABASE_PROVIDER" == "sqlite" ]]; then
    if [ -z "$DATABASE_URL" ]; then
        # Default to absolute path in current directory
        DB_PATH="$(pwd)/evolution.db"
        export DATABASE_URL="file:$DB_PATH"
        
        # Robustly append to .env
        echo "" >> .env
        echo "DATABASE_URL=file:$DB_PATH" >> .env
        
        echo "Set DATABASE_URL to $DATABASE_URL"
    fi
    
    echo "Deploying for sqlite at $DATABASE_URL"
    npm run db:generate
    if [ $? -ne 0 ]; then
        echo "Prisma generate failed"
        exit 1
    else
        echo "Prisma generate succeeded"
    fi
    
    npx prisma db push --schema ./prisma/sqlite-schema.prisma
    if [ $? -ne 0 ]; then
        echo "Prisma db push failed"
        exit 1
    else
        echo "Prisma db push succeeded"
        # Verify file creation
        ls -la evolution.db || echo "evolution.db NOT FOUND"
        chmod 666 evolution.db
    fi
else
    echo "Error: Database provider $DATABASE_PROVIDER invalid."
    exit 1
fi
