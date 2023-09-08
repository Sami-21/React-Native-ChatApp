import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Welcome from "./Welcome";
import EmailInput from "./EmailInput";
import OtpVerification from "./OtpVerification";

const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Email input" component={EmailInput} />
      <Stack.Screen name="Otp input" component={OtpVerification} />
    </Stack.Navigator>
  );
};

export default Index;
