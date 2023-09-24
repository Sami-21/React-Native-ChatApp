import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, Center, Pressable, Spacer, Text } from "native-base";
import { useRoute } from "@react-navigation/native";

const ChatHeaderTitle: React.FC<any> = ({ navigation }) => {
  const route = useRoute();
  const { targetUser } = route.params;
  const redirectToUserMenu = () => {
    navigation?.navigate("User Menu", { targetUser: targetUser });
  };
  return (
    <Pressable
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      onPress={redirectToUserMenu}
    >
      <Center w={150} h={50} flexDir={"row"} justifyContent={"flex-start"}>
        <Avatar
          size="32px"
          source={{
            uri: targetUser?.avatarUrl,
          }}
        />
        <Spacer />
        <Text bold>{targetUser?.fullName}</Text>
      </Center>
    </Pressable>
  );
};

export default ChatHeaderTitle;

const styles = StyleSheet.create({});
