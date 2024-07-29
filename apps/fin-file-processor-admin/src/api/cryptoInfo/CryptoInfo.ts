import { FileInfo } from "../fileInfo/FileInfo";

export type CryptoInfo = {
  createdAt: Date;
  encryptionType: string | null;
  fileInfo?: FileInfo | null;
  id: string;
  isEncrypted: boolean | null;
  updatedAt: Date;
};
