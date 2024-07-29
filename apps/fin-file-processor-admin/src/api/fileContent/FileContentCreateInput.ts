import { InputJsonValue } from "../../types";
import { FileInfoWhereUniqueInput } from "../fileInfo/FileInfoWhereUniqueInput";

export type FileContentCreateInput = {
  contentJson?: InputJsonValue;
  fileInfo?: FileInfoWhereUniqueInput | null;
};
