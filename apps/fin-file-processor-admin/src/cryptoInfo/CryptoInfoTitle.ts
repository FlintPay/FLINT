import { CryptoInfo as TCryptoInfo } from "../api/cryptoInfo/CryptoInfo";

export const CRYPTOINFO_TITLE_FIELD = "encryptionType";

export const CryptoInfoTitle = (record: TCryptoInfo): string => {
  return record.encryptionType?.toString() || String(record.id);
};
