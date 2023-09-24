import React, { useState } from "react";
import {
  Box,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Text,
  useTheme,
} from "native-base";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Appearance } from "react-native";

interface ChatButtonIcon {
  name: string;
  icon: string;
}

interface User {
  id: number;
  name: string;
}

interface Message {
  id: number;
  user_id: number;
  room_id: number;
  content: string;
}

const ChatRoom: React.FC = () => {
  const { colors } = useTheme();
  const colorScheme = Appearance.getColorScheme();
  const [bgColor, setBgColor] = useState<string>(
    colorScheme === "dark" ? colors.dark[100] : colors.light[100]
  );
  const [currentUser, setCurrentUser] = useState<User>({
    id: 1,
    name: "Maachi Sami",
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user_id: 1,
      room_id: 1,
      content:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
    {
      id: 2,
      user_id: 2,
      room_id: 1,
      content: "Hello",
    },
    {
      id: 3,
      user_id: 2,
      room_id: 1,
      content: "How are you bro",
    },
    {
      id: 4,
      user_id: 1,
      room_id: 1,
      content: "labas 7akma",
    },
    {
      id: 5,
      user_id: 1,
      room_id: 1,
      content: "Hat Khamssalaf",
    },
    {
      id: 6,
      user_id: 2,
      room_id: 1,
      content: "Suka naxuy",
    },
  ]);
  const chatButtonIcons: ChatButtonIcon[] = [
    {
      name: "more actions",
      icon: "plus",
    },
    {
      name: "gallery",
      icon: "image",
    },
    {
      name: "vocals",
      icon: "microphone",
    },
  ];
  return (
    <Box position={"relative"} flex={1}>
      <ScrollView flex={1} px={4} w={"full"}>
        {messages.map((message: Message) => (
          <Text
            key={message.id}
            alignSelf={
              currentUser.id === message.user_id ? "flex-end" : "flex-start"
            }
            rounded={"2xl"}
            my={1}
            py={2}
            px={4}
            bg={
              currentUser.id === message.user_id ? "lightBlue.500" : "light.500"
            }
          >
            {message.content}
          </Text>
        ))}
      </ScrollView>
      <Box
        flex={1}
        flexDirection={"row"}
        position={"absolute"}
        bottom={0}
        left={0}
        w={"full"}
        h={75}
        bg={bgColor}
      >
        {chatButtonIcons.map((icon: ChatButtonIcon, index: number) => (
          <IconButton
            key={index}
            name={icon.name}
            rounded={"full"}
            icon={<Icon as={MaterialCommunityIcons} name={icon.icon} />}
          />
        ))}
        <Input
          my={4}
          px={4}
          flex={1}
          rounded={"full"}
          InputRightElement={
            <IconButton
              icon={<Icon as={Entypo} name="emoji-happy" rounded={"full"} />}
            />
          }
          placeholder="Message"
        />
        <IconButton
          icon={
            <Icon as={MaterialCommunityIcons} name="send" rounded={"full"} />
          }
        />
      </Box>
    </Box>
  );
};

export default ChatRoom;
