import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FILEINFO_TITLE_FIELD } from "../fileInfo/FileInfoTitle";

export const CryptoInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CryptoInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="encryptionType" source="encryptionType" />
        <ReferenceField
          label="FileInfo"
          source="fileinfo.id"
          reference="FileInfo"
        >
          <TextField source={FILEINFO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="isEncrypted" source="isEncrypted" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
