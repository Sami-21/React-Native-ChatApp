import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import WelcomeScreens from "./views/WelcomeScreens/Index";
import MainScreens from "./views/MainScreens/Index";
import React from "react";

const Main: React.FC = () => {
  const navigationTheme = {
    ...DefaultTheme,
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <WelcomeScreens /> */}
      <MainScreens />
    </NavigationContainer>
  );
};

export default Main;
