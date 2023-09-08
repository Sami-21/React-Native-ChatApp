import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreens from "./views/WelcomeScreens/Index";
import MainScreens from "./views/MainScreens/Index";
import React from "react";

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <WelcomeScreens /> */}
      <MainScreens />
    </NavigationContainer>
  );
};

export default Main;
