import { DecryptionKey as TDecryptionKey } from "../api/decryptionKey/DecryptionKey";

export const DECRYPTIONKEY_TITLE_FIELD = "id";

export const DecryptionKeyTitle = (record: TDecryptionKey): string => {
  return record.id?.toString() || String(record.id);
};
