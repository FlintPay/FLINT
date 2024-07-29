import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { FILEINFO_TITLE_FIELD } from "./FileInfoTitle";

export const FileInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="fileSize" source="fileSize" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadDate" source="uploadDate" />
        <ReferenceManyField
          reference="CryptoInfo"
          target="fileInfoId"
          label="CryptoInfos"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="FileContent"
          target="fileInfoId"
          label="FileContents"
        >
          <Datagrid rowClick="show">
            <TextField label="contentJson" source="contentJson" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="FileInfo"
              source="fileinfo.id"
              reference="FileInfo"
            >
              <TextField source={FILEINFO_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
