import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FileInfoTitle } from "../fileInfo/FileInfoTitle";

export const FileContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
