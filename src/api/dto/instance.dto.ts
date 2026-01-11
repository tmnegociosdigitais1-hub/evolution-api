import { WAPresence } from 'baileys';

export class InstanceDto {
    instanceName: string;
    instanceId?: string;
    integration?: string;
    token?: string;
    number?: string;
    businessId?: string;
    status?: string;
    ownerJid?: string;
    profileName?: string;
    profilePicUrl?: string;

    // Proxy
    proxyHost?: string;
    proxyPort?: number;
    proxyProtocol?: string;
    proxyUsername?: string;
    proxyPassword?: string;

    // Settings
    rejectCall?: boolean;
    msgCall?: string;
    groupsIgnore?: boolean;
    alwaysOnline?: boolean;
    readMessages?: boolean;
    readStatus?: boolean;
    syncFullHistory?: boolean;
    wavoipToken?: string;

    // Chatwoot
    chatwootAccountId?: string;
    chatwootToken?: string;
    chatwootUrl?: string;
    chatwootSignMsg?: boolean;
    chatwootReopenConversation?: boolean;
    chatwootConversationPending?: boolean;
    chatwootImportContacts?: boolean;
    chatwootMergeBrazilContacts?: boolean;
    chatwootImportMessages?: boolean;
    chatwootDaysLimitImportMessages?: number;
    chatwootOrganization?: string;
    chatwootLogo?: string;
    chatwootAutoCreate?: boolean;
    chatwootNameInbox?: string;

    qrcode?: boolean;

    webhook?: {
        url: string;
        headers?: any;
        byEvents?: boolean;
        base64?: boolean;
    };

    websocket?: {
        enabled: boolean;
    };

    rabbitmq?: {
        enabled: boolean;
    };

    nats?: {
        enabled: boolean;
    };

    sqs?: {
        enabled: boolean;
    };

    connectionStatus?: string | { state: string };
    pairingCode?: string;
}

export class SetPresenceDto {
    presence: WAPresence;
    delay?: number;
}
