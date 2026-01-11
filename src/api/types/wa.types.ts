export enum Integration {
    WHATSAPP_BAILEYS = 'whatsapp_baileys',
    WHATSAPP_BUSINESS = 'whatsapp_business',
    EVOLUTION = 'evolution',
}

export enum Events {
    APPLICATION_STARTUP = 'application.startup',
    INSTANCE_CREATE = 'instance.create',
    INSTANCE_DELETE = 'instance.delete',
    QRCODE_UPDATED = 'qrcode.updated',
    MESSAGES_SET = 'messages.set',
    MESSAGES_UPSERT = 'messages.upsert',
    MESSAGES_EDITED = 'messages.edited',
    MESSAGES_UPDATE = 'messages.update',
    MESSAGES_DELETE = 'messages.delete',
    SEND_MESSAGE = 'send.message',
    SEND_MESSAGE_UPDATE = 'send.message.update',
    CONTACTS_SET = 'contacts.set',
    CONTACTS_UPSERT = 'contacts.upsert',
    CONTACTS_UPDATE = 'contacts.update',
    PRESENCE_UPDATE = 'presence.update',
    CHATS_SET = 'chats.set',
    CHATS_UPSERT = 'chats.upsert',
    CHATS_UPDATE = 'chats.update',
    CHATS_DELETE = 'chats.delete',
    GROUPS_UPSERT = 'groups.upsert',
    GROUPS_UPDATE = 'groups.update',
    GROUP_UPDATE = 'group.update',
    GROUP_PARTICIPANTS_UPDATE = 'group.participants.update',
    CONNECTION_UPDATE = 'connection.update',
    LABELS_EDIT = 'labels.edit',
    LABELS_ASSOCIATION = 'labels.association',
    CALL = 'call',
    TYPEBOT_START = 'typebot.start',
    TYPEBOT_CHANGE_STATUS = 'typebot.change.status',
    STATUS_INSTANCE = 'status.instance',
    REMOVE_INSTANCE = 'remove.instance',
    LOGOUT_INSTANCE = 'logout.instance',
}

export namespace wa {
    export type StatusMessage = 'ERROR' | 'PENDING' | 'SERVER_ACK' | 'DELIVERY_ACK' | 'READ' | 'PLAYED';

    export interface QrCode {
        pairingCode?: string;
        code?: string;
        base64?: string;
        count?: number;
    }

    export interface StateConnection {
        state: string;
        statusReason?: number;
    }

    export interface LocalSettings {
        rejectCall?: boolean;
        msgCall?: string;
        groupsIgnore?: boolean;
        alwaysOnline?: boolean;
        readMessages?: boolean;
        readStatus?: boolean;
        syncFullHistory?: boolean;
        wavoipToken?: string;
    }

    export interface LocalEvent {
        enabled?: boolean;
        events?: string[];
        instanceId?: string;
    }

    export interface LocalWebHook {
        enabled?: boolean;
        url?: string;
        headers?: any;
        webhookByEvents?: boolean;
        webhookBase64?: boolean;
    }

    export interface LocalPusher {
        enabled?: boolean;
        appId?: string;
        key?: string;
        secret?: string;
        cluster?: string;
        useTLS?: boolean;
    }

    export interface LocalChatwoot {
        enabled?: boolean;
        accountId?: string;
        token?: string;
        url?: string;
        nameInbox?: string;
        signMsg?: boolean;
        signDelimiter?: string;
        number?: string;
        reopenConversation?: boolean;
        conversationPending?: boolean;
        mergeBrazilContacts?: boolean;
        importContacts?: boolean;
        importMessages?: boolean;
        daysLimitImportMessages?: number;
    }

    export interface LocalProxy {
        enabled?: boolean;
        host?: string;
        port?: string;
        protocol?: string;
        username?: string;
        password?: string;
    }

    export interface Instance {
        id?: string;
        name?: string;
        connectionStatus?: string;
        ownerJid?: string;
        profileName?: string;
        profilePicUrl?: string;
        profilePictureUrl?: string;
        integration?: string;
        number?: string;
        businessId?: string;
        token?: string;
        clientName?: string;
        disconnectionReasonCode?: number;
        disconnectionObject?: any;
        disconnectionAt?: Date;
        wuid?: string;
        qrcode?: any;
        authState?: any;
    }
}

export enum MessageSubtype {
    TEXT = 'text',
    IMAGE = 'image',
    VIDEO = 'video',
    AUDIO = 'audio',
    DOCUMENT = 'document',
    STICKER = 'sticker',
    LOCATION = 'location',
    CONTACT = 'contact',
    BUTTONS_RESPONSE = 'buttons_response',
    LIST_RESPONSE = 'list_response',
}

export enum TypeMediaMessage {
    IMAGE = 'image',
    VIDEO = 'video',
    AUDIO = 'audio',
    DOCUMENT = 'document',
    STICKER = 'sticker',
}
