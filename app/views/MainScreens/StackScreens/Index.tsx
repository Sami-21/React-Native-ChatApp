import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatRoom from "./ChatRoom";
import BottomTabsScreens from "../BottomTabsScreens/Index";
import UserMenu from "./UserMenu";
import ChatHeaderTitle from "./partials/ChatHeaderTitle";
import ChatHeaderRightContainer from "./partials/ChatHeaderRightContainer";
import { Icon, IconButton, Menu, Pressable } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatStack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        options={{
          headerShown: false,
          headerShadowVisible: true,
        }}
        name="bottom tabs screens"
        component={BottomTabsScreens}
      />
      <ChatStack.Screen
        options={({ navigation }) => ({
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: (props) => (
            <ChatHeaderTitle navigation={navigation} {...props} />
          ),
          headerRight: (props) => (
            <ChatHeaderRightContainer navigation={navigation} {...props} />
          ),
        })}
        name="Chat room"
        component={ChatRoom}
      />

      <ChatStack.Screen
        options={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => <></>,
          headerRight: (props) => (
            <Menu
              placement="bottom right"
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    mr={4}
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    <Icon
                      size={28}
                      as={MaterialCommunityIcons}
                      name="dots-vertical"
                    />
                  </Pressable>
                );
              }}
            >
              <Menu.Item>Open chat head</Menu.Item>
              <Menu.Item>Delete conversation</Menu.Item>
              <Menu.Item>Report technical problem</Menu.Item>
            </Menu>
          ),
        }}
        name="User Menu"
        component={UserMenu}
      />
    </ChatStack.Navigator>
  );
};

export default Index;
