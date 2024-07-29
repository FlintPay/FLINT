import { CryptoInfoWhereInput } from "./CryptoInfoWhereInput";
import { CryptoInfoOrderByInput } from "./CryptoInfoOrderByInput";

export type CryptoInfoFindManyArgs = {
  where?: CryptoInfoWhereInput;
  orderBy?: Array<CryptoInfoOrderByInput>;
  skip?: number;
  take?: number;
};
