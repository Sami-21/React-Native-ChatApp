import React from "react";
import { Center, Icon, IconButton } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

interface Icon {
  name: string;
  icon: string;
  onClick: () => void;
}

const ChatHeaderRightContainer: React.FC<any> = ({ navigation }) => {
  const route = useRoute();
  const { targetUser } = route.params;

  const icons: Icon[] = [
    {
      name: "phone call",
      icon: "phone",
      onClick: () => {},
    },
    {
      name: "video call",
      icon: "video-plus",
      onClick: () => {},
    },
    {
      name: "Informations",
      icon: "information",
      onClick: () => {
        navigation?.navigate("User Menu", { targetUser: targetUser });
      },
    },
  ];

  return (
    <Center flexDir={"row"} flex={1} bg={"white"}>
      {icons.map((icon: Icon, index: number) => (
        <IconButton
          key={index}
          rounded={"full"}
          icon={<Icon as={MaterialCommunityIcons} name={icon.icon} />}
          onPress={icon.onClick}
        />
      ))}
    </Center>
  );
};

export default ChatHeaderRightContainer;
