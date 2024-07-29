import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CryptoInfoTitle } from "../cryptoInfo/CryptoInfoTitle";
import { FileContentTitle } from "../fileContent/FileContentTitle";

export const FileInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cryptoInfos"
          reference="CryptoInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CryptoInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileContents"
          reference="FileContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileContentTitle} />
        </ReferenceArrayInput>
        <TextInput label="fileName" source="fileName" />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Edit>
  );
};
