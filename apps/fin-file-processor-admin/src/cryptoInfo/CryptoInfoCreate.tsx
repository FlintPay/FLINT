import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { FileInfoTitle } from "../fileInfo/FileInfoTitle";

export const CryptoInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="encryptionType" source="encryptionType" />
        <ReferenceInput
          source="fileInfo.id"
          reference="FileInfo"
          label="FileInfo"
        >
          <SelectInput optionText={FileInfoTitle} />
        </ReferenceInput>
        <BooleanInput label="isEncrypted" source="isEncrypted" />
      </SimpleForm>
    </Create>
  );
};
