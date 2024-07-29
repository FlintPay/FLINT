import { DataExtraction as TDataExtraction } from "../api/dataExtraction/DataExtraction";

export const DATAEXTRACTION_TITLE_FIELD = "id";

export const DataExtractionTitle = (record: TDataExtraction): string => {
  return record.id?.toString() || String(record.id);
};
