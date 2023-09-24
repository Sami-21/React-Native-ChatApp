import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Action {
  name: string;
  icon: string;
  onClick: () => void;
}

interface SingleSectionOption {
  title: string;
  icon?: string;
  onClick: () => void;
}

interface SettingSection {
  title: string;
  list: SingleSectionOption[];
}

const UserMenu: React.FC = () => {
  const route = useRoute();
  const { targetUser } = route.params;

  const actions: Action[] = [
    {
      name: "Audio",
      icon: "phone",
      onClick: () => {
        console.log("pressed");
      },
    },
    {
      name: "Video",
      icon: "video",
      onClick: () => {
        console.log("pressed");
      },
    },
    {
      name: "Profile",
      icon: "account",
      onClick: () => {
        console.log("pressed");
      },
    },
    {
      name: "Mute",
      icon: "bell",
      onClick: () => {
        console.log("pressed");
      },
    },
  ];
  const settingSections: SettingSection[] = [
    {
      title: "Customisation",
      list: [
        {
          title: "Theme",
          icon: "plus",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Quick reactions",
          icon: "thumb-up",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Nicknames",
          onClick: () => {
            console.log("pressed");
          },
        },
      ],
    },
    {
      title: "More actions",
      list: [
        {
          title: "View media, files and links",
          icon: "image",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "View pinned message",
          icon: "pin",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Search in conversation",
          icon: "magnify",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Notification & sound",
          icon: "bell",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Notification sounds",
          icon: "bell",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Go to secret conversation",
          icon: "lock",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Create group chat with " + targetUser.fullName,
          icon: "account-group",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Share contact",
          icon: "account-group",
          onClick: () => {
            console.log("pressed");
          },
        },
      ],
    },
    {
      title: "Privacy and support",
      list: [
        {
          title: "Restrict",
          icon: "chat-remove-outline",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Block",
          icon: "cancel",
          onClick: () => {
            console.log("pressed");
          },
        },
        {
          title: "Report",
          icon: "alert",
          onClick: () => {
            console.log("pressed");
          },
        },
      ],
    },
  ];

  return (
    <ScrollView flex={1}>
      <Center w={"full"} py={4}>
        <Avatar
          size="100px"
          source={{
            uri: targetUser?.avatarUrl,
          }}
        >
          <Avatar.Badge
            style={{ transform: [{ translateX: -2.5 }, { translateY: -2.5 }] }}
            size={6}
            bg="green.600"
          ></Avatar.Badge>
        </Avatar>
        <Text mt={4} bold fontSize={24} mb={4}>
          {targetUser.fullName}
        </Text>
        <HStack w={"2/3"} justifyContent={"space-between"} flexDir={"row"}>
          {actions.map((action: Action, index: number) => (
            <VStack key={index}>
              <IconButton
                name={action.name}
                bg={"#111"}
                rounded={"full"}
                icon={
                  <Icon
                    color={"white"}
                    as={MaterialCommunityIcons}
                    size={"md"}
                    name={action.icon}
                  />
                }
              />
              <Text fontSize={12} textAlign={"center"}>
                {action.name}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Center>
      <Box mx={4}>
        {settingSections.map((section: SettingSection, index: number) => (
          <VStack key={index}>
            <Text py={4} bold color={"gray.400"}>
              {section.title}
            </Text>
            {section.list.map((item: SingleSectionOption, index: number) => (
              <HStack key={index}>
                <Pressable
                  flexDir={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  w={"full"}
                  height={60}
                  px={4}
                  onPress={item.onClick}
                >
                  <Text>{item.title}</Text>
                  {item.icon && (
                    <Center bg={"gray.700"} p={2} rounded={"full"}>
                      <Icon
                        color={"white"}
                        as={MaterialCommunityIcons}
                        name={item.icon}
                      ></Icon>
                    </Center>
                  )}
                </Pressable>
              </HStack>
            ))}
          </VStack>
        ))}
      </Box>
    </ScrollView>
  );
};

export default UserMenu;
