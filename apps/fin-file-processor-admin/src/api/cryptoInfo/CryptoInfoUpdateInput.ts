import { FileInfoWhereUniqueInput } from "../fileInfo/FileInfoWhereUniqueInput";

export type CryptoInfoUpdateInput = {
  encryptionType?: string | null;
  fileInfo?: FileInfoWhereUniqueInput | null;
  isEncrypted?: boolean | null;
};
