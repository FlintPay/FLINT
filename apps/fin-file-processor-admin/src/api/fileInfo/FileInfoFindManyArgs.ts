import { FileInfoWhereInput } from "./FileInfoWhereInput";
import { FileInfoOrderByInput } from "./FileInfoOrderByInput";

export type FileInfoFindManyArgs = {
  where?: FileInfoWhereInput;
  orderBy?: Array<FileInfoOrderByInput>;
  skip?: number;
  take?: number;
};
