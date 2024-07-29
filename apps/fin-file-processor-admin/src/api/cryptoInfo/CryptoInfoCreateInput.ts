import { FileInfoWhereUniqueInput } from "../fileInfo/FileInfoWhereUniqueInput";

export type CryptoInfoCreateInput = {
  encryptionType?: string | null;
  fileInfo?: FileInfoWhereUniqueInput | null;
  isEncrypted?: boolean | null;
};
