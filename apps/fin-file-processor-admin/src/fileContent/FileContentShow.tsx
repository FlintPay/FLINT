import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FILEINFO_TITLE_FIELD } from "../fileInfo/FileInfoTitle";

export const FileContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
