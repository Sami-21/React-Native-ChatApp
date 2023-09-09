import { NativeBaseProvider, extendTheme } from "native-base";
import "react-native-gesture-handler";
import Main from "./app/Main";

export default function App() {
  const nativeBaseTheme = extendTheme({});

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <Main />
    </NativeBaseProvider>
  );
}
