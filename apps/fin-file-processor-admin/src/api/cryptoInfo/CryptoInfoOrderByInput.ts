import { SortOrder } from "../../util/SortOrder";

export type CryptoInfoOrderByInput = {
  createdAt?: SortOrder;
  encryptionType?: SortOrder;
  fileInfoId?: SortOrder;
  id?: SortOrder;
  isEncrypted?: SortOrder;
  updatedAt?: SortOrder;
};
