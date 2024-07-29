import { FileContent as TFileContent } from "../api/fileContent/FileContent";

export const FILECONTENT_TITLE_FIELD = "id";

export const FileContentTitle = (record: TFileContent): string => {
  return record.id?.toString() || String(record.id);
};
