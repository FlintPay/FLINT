import { CryptoInfoUpdateManyWithoutFileInfosInput } from "./CryptoInfoUpdateManyWithoutFileInfosInput";
import { FileContentUpdateManyWithoutFileInfosInput } from "./FileContentUpdateManyWithoutFileInfosInput";

export type FileInfoUpdateInput = {
  cryptoInfos?: CryptoInfoUpdateManyWithoutFileInfosInput;
  fileContents?: FileContentUpdateManyWithoutFileInfosInput;
  fileName?: string | null;
  fileSize?: number | null;
  uploadDate?: Date | null;
};
