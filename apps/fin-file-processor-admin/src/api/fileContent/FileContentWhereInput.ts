import { JsonFilter } from "../../util/JsonFilter";
import { FileInfoWhereUniqueInput } from "../fileInfo/FileInfoWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FileContentWhereInput = {
  contentJson?: JsonFilter;
  fileInfo?: FileInfoWhereUniqueInput;
  id?: StringFilter;
};
