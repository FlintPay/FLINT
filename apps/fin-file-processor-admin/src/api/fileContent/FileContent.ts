import { JsonValue } from "type-fest";
import { FileInfo } from "../fileInfo/FileInfo";

export type FileContent = {
  contentJson: JsonValue;
  createdAt: Date;
  fileInfo?: FileInfo | null;
  id: string;
  updatedAt: Date;
};
