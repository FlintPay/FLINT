import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FileContentList } from "./fileContent/FileContentList";
import { FileContentCreate } from "./fileContent/FileContentCreate";
import { FileContentEdit } from "./fileContent/FileContentEdit";
import { FileContentShow } from "./fileContent/FileContentShow";
import { FileInfoList } from "./fileInfo/FileInfoList";
import { FileInfoCreate } from "./fileInfo/FileInfoCreate";
import { FileInfoEdit } from "./fileInfo/FileInfoEdit";
import { FileInfoShow } from "./fileInfo/FileInfoShow";
import { CryptoInfoList } from "./cryptoInfo/CryptoInfoList";
import { CryptoInfoCreate } from "./cryptoInfo/CryptoInfoCreate";
import { CryptoInfoEdit } from "./cryptoInfo/CryptoInfoEdit";
import { CryptoInfoShow } from "./cryptoInfo/CryptoInfoShow";
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
        title={"FinFileProcessor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FileContent"
          list={FileContentList}
          edit={FileContentEdit}
          create={FileContentCreate}
          show={FileContentShow}
        />
        <Resource
          name="FileInfo"
          list={FileInfoList}
          edit={FileInfoEdit}
          create={FileInfoCreate}
          show={FileInfoShow}
        />
        <Resource
          name="CryptoInfo"
          list={CryptoInfoList}
          edit={CryptoInfoEdit}
          create={CryptoInfoCreate}
          show={CryptoInfoShow}
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
