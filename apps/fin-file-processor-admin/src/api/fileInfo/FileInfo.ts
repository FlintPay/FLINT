import { CryptoInfo } from "../cryptoInfo/CryptoInfo";
import { FileContent } from "../fileContent/FileContent";

export type FileInfo = {
  createdAt: Date;
  cryptoInfos?: Array<CryptoInfo>;
  fileContents?: Array<FileContent>;
  fileName: string | null;
  fileSize: number | null;
  id: string;
  updatedAt: Date;
  uploadDate: Date | null;
};
