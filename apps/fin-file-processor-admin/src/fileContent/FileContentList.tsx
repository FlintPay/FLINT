import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FILEINFO_TITLE_FIELD } from "../fileInfo/FileInfoTitle";

export const FileContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FileContents"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
