import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Feed from "./Feed";
import ChatRoom from "./ChatRoom";

const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Feed"
        component={Feed}
      />
      <Stack.Screen name="Chat room" component={ChatRoom} />
    </Stack.Navigator>
  );
};

export default Index;
