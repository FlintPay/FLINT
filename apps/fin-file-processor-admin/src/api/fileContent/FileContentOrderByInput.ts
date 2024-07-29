import { SortOrder } from "../../util/SortOrder";

export type FileContentOrderByInput = {
  contentJson?: SortOrder;
  createdAt?: SortOrder;
  fileInfoId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
