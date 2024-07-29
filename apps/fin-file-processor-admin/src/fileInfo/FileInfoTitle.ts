import { FileInfo as TFileInfo } from "../api/fileInfo/FileInfo";

export const FILEINFO_TITLE_FIELD = "fileName";

export const FileInfoTitle = (record: TFileInfo): string => {
  return record.fileName?.toString() || String(record.id);
};
