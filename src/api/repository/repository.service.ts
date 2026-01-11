import { ConfigService, Database } from '@config/env.config';
import { Logger } from '@config/logger.config';
import { PrismaClient } from '@prisma/client';

export class Query<T> {
  where?: T;
  sort?: 'asc' | 'desc';
  page?: number;
  offset?: number;
}

export class PrismaRepository extends PrismaClient {
  constructor(private readonly configService: ConfigService) {
    const dbConfig = configService.get<Database>('DATABASE');
    let dbUrl = dbConfig.CONNECTION.URI;

    // Remove quotes if present
    if (dbUrl.startsWith('"') && dbUrl.endsWith('"')) {
      dbUrl = dbUrl.substring(1, dbUrl.length - 1);
    }

    // Ensure SQLite protocol if provider is sqlite
    if (dbConfig.PROVIDER === 'sqlite' && !dbUrl.startsWith('file:')) {
      dbUrl = `file:${dbUrl}`;
    }

    super({
      datasources: {
        db: {
          url: dbUrl,
        },
      },
    });
  }

  private readonly logger = new Logger('PrismaRepository');

  public async onModuleInit() {
    await this.$connect();
    this.logger.info('Repository:Prisma - ON');
  }

  public async onModuleDestroy() {
    await this.$disconnect();
    this.logger.warn('Repository:Prisma - OFF');
  }
}
