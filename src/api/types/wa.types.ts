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
    CONTACTS_SET = 'contacts.set',
    CONTACTS_UPSERT = 'contacts.upsert',
    CONTACTS_UPDATE = 'contacts.update',
    PRESENCE_UPDATE = 'presence.update',
    CHATS_SET = 'chats.set',
    CHATS_UPSERT = 'chats.upsert',
    CHATS_UPDATE = 'chats.update',
    CHATS_DELETE = 'chats.delete',
    GROUPS_UPSERT = 'groups.upsert',
    GROUP_UPDATE = 'group.update',
    GROUP_PARTICIPANTS_UPDATE = 'group.participants.update',
    CONNECTION_UPDATE = 'connection.update',
    CALL = 'call',
    TYPEBOT_START = 'typebot.start',
    TYPEBOT_CHANGE_STATUS = 'typebot.change.status',
    STATUS_INSTANCE = 'status.instance',
    REMOVE_INSTANCE = 'remove.instance',
    LOGOUT_INSTANCE = 'logout.instance',
}

export namespace wa {
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
        rejectCall: boolean;
        msgCall: string;
        groupsIgnore: boolean;
        alwaysOnline: boolean;
        readMessages: boolean;
        readStatus: boolean;
        syncFullHistory: boolean;
        wavoipToken: string;
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
