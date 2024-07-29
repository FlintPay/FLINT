import { CryptoInfoListRelationFilter } from "../cryptoInfo/CryptoInfoListRelationFilter";
import { FileContentListRelationFilter } from "../fileContent/FileContentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FileInfoWhereInput = {
  cryptoInfos?: CryptoInfoListRelationFilter;
  fileContents?: FileContentListRelationFilter;
  fileName?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
};
