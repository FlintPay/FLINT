import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { FILEINFO_TITLE_FIELD } from "../fileInfo/FileInfoTitle";

export const CryptoInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
