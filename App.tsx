import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import Main from "./app/Main";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}
