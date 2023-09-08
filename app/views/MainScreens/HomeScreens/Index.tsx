import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Messages from "./Messages";
import Active from "./Active";
import Groups from "./Groups";
import Calls from "./Calls";

const Tab = createMaterialTopTabNavigator();

const Index: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Active" component={Active} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Index;
