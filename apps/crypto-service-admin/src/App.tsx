import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { DecryptionKeyList } from "./decryptionKey/DecryptionKeyList";
import { DecryptionKeyCreate } from "./decryptionKey/DecryptionKeyCreate";
import { DecryptionKeyEdit } from "./decryptionKey/DecryptionKeyEdit";
import { DecryptionKeyShow } from "./decryptionKey/DecryptionKeyShow";
import { DataExtractionList } from "./dataExtraction/DataExtractionList";
import { DataExtractionCreate } from "./dataExtraction/DataExtractionCreate";
import { DataExtractionEdit } from "./dataExtraction/DataExtractionEdit";
import { DataExtractionShow } from "./dataExtraction/DataExtractionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CryptoService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="DecryptionKey"
          list={DecryptionKeyList}
          edit={DecryptionKeyEdit}
          create={DecryptionKeyCreate}
          show={DecryptionKeyShow}
        />
        <Resource
          name="DataExtraction"
          list={DataExtractionList}
          edit={DataExtractionEdit}
          create={DataExtractionCreate}
          show={DataExtractionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
