import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Center,
  Image,
  Text,
  Button,
  Progress,
  Icon,
  Stack,
} from "native-base";
import React from "react";

const Welcome: React.FC = ({ navigation }: any) => {
  return (
    <Box py={20} h={"full"}>
      <Stack h={"full"} space="2xl">
        <Center w="100%">
          <Box w="full" maxW="400">
            <Progress value={20} mx="4" />
          </Box>
        </Center>
        <Center mx={10}>
          <Image
            w={"full"}
            h={300}
            borderRadius={20}
            source={{
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            alt="image"
          />
          <Center mt={4}>
            <Text bold>Welcome to our messaging app</Text>
            <Text>Please follow our instructions to set up your account</Text>
          </Center>
        </Center>
        <Box alignItems={"flex-end"}>
          <Button
            variant={"ghost"}
            width={"32"}
            onPress={() => {
              navigation.navigate("Email input");
            }}
            endIcon={<Icon as={Ionicons} name="arrow-forward" />}
          >
            Continue
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Welcome;
