import { CryptoInfoCreateNestedManyWithoutFileInfosInput } from "./CryptoInfoCreateNestedManyWithoutFileInfosInput";
import { FileContentCreateNestedManyWithoutFileInfosInput } from "./FileContentCreateNestedManyWithoutFileInfosInput";

export type FileInfoCreateInput = {
  cryptoInfos?: CryptoInfoCreateNestedManyWithoutFileInfosInput;
  fileContents?: FileContentCreateNestedManyWithoutFileInfosInput;
  fileName?: string | null;
  fileSize?: number | null;
  uploadDate?: Date | null;
};
