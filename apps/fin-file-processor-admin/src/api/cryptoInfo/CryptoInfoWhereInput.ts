import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileInfoWhereUniqueInput } from "../fileInfo/FileInfoWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CryptoInfoWhereInput = {
  encryptionType?: StringNullableFilter;
  fileInfo?: FileInfoWhereUniqueInput;
  id?: StringFilter;
  isEncrypted?: BooleanNullableFilter;
};
