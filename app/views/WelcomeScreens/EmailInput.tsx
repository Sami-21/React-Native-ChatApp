import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  Icon,
  Input,
  Progress,
  Stack,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

const EmailInput: React.FC = ({ navigation }: any) => {
  let validationSchema = yup.object({
    email: yup.string().email().required(),
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate("Otp input");
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <Box py={20} h={"full"}>
          <VStack space="2xl" justifyContent={"space-between"}>
            <Center w="100%">
              <Box w="full" maxW="400">
                <Progress value={40} mx="4" />
              </Box>
            </Center>

            <Center>
              <FormControl
                isRequired
                isInvalid={!!(errors.email && touched.email)}
              >
                <Stack mx="4">
                  <FormControl.Label>Email Address</FormControl.Label>
                  <Input
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="email" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Your email"
                  />

                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors.email}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            </Center>
            <Box mx={10} flexDir={"row"} justifyContent={"space-between"}>
              <Button
                variant={"ghost"}
                w={"32"}
                startIcon={<Icon as={Ionicons} name="arrow-back" />}
                onPress={() => {
                  navigation?.navigate("Welcome");
                }}
              >
                Back
              </Button>
              <Button
                variant={"ghost"}
                w={"32"}
                endIcon={<Icon as={Ionicons} name="arrow-forward" />}
                onPress={() => handleSubmit()}
              >
                Continue
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </Formik>
  );
};

export default EmailInput;
