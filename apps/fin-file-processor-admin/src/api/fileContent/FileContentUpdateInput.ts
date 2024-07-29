import { InputJsonValue } from "../../types";
import { FileInfoWhereUniqueInput } from "../fileInfo/FileInfoWhereUniqueInput";

export type FileContentUpdateInput = {
  contentJson?: InputJsonValue;
  fileInfo?: FileInfoWhereUniqueInput | null;
};
