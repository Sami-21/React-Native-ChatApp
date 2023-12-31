import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./Home";
import People from "./People";
import Camera from "./Camera";
import Games from "./Games";
import Profile from "./Profile";

const Tab = createMaterialBottomTabNavigator();

const Index: React.FC = () => {
  return (
    <Tab.Navigator style={{ paddingTop: 40 }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              name="home"
              size={26}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              name="account-multiple"
              size={26}
            />
          ),
        }}
        name="People"
        component={People}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              name="camera"
              size={26}
            />
          ),
        }}
        name="Camera"
        component={Camera}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              name="controller-classic"
              size={26}
            />
          ),
        }}
        name="Games"
        component={Games}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              name="cog"
              size={26}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Index;
