import { DecryptionKeyWhereInput } from "./DecryptionKeyWhereInput";
import { DecryptionKeyOrderByInput } from "./DecryptionKeyOrderByInput";

export type DecryptionKeyFindManyArgs = {
  where?: DecryptionKeyWhereInput;
  orderBy?: Array<DecryptionKeyOrderByInput>;
  skip?: number;
  take?: number;
};
