import { FileContentWhereInput } from "./FileContentWhereInput";
import { FileContentOrderByInput } from "./FileContentOrderByInput";

export type FileContentFindManyArgs = {
  where?: FileContentWhereInput;
  orderBy?: Array<FileContentOrderByInput>;
  skip?: number;
  take?: number;
};
