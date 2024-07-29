import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { FileInfoTitle } from "../fileInfo/FileInfoTitle";

export const CryptoInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
