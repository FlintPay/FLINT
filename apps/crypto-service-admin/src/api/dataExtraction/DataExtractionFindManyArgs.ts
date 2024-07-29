import { DataExtractionWhereInput } from "./DataExtractionWhereInput";
import { DataExtractionOrderByInput } from "./DataExtractionOrderByInput";

export type DataExtractionFindManyArgs = {
  where?: DataExtractionWhereInput;
  orderBy?: Array<DataExtractionOrderByInput>;
  skip?: number;
  take?: number;
};
