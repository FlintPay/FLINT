import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileInfoTitle } from "../fileInfo/FileInfoTitle";

export const FileContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="fileInfo.id"
          reference="FileInfo"
          label="FileInfo"
        >
          <SelectInput optionText={FileInfoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
