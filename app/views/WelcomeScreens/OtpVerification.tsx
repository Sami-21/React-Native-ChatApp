import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  Icon,
  Progress,
  Stack,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import { Formik } from "formik";
import React, { useState } from "react";
import OtpInput from "../../components/OtpInput";

const OtpVerification: React.FC = ({ navigation }: any) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [isResendAvailable, setIsResendAvailable] = useState<boolean>(true);
  const [countdown, setCountdown] = useState(30);

  const sendOtp = () => {
    setIsResendAvailable(false);
  };
  return (
    <Formik
      initialValues={{ otp: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <Box py={20} h={"full"}>
          <VStack space="2xl" justifyContent={"space-between"}>
            <Center w="100%">
              <Box w="full" maxW="400">
                <Progress value={60} mx="4" />
              </Box>
            </Center>

            <Center>
              <FormControl isRequired>
                <Stack mx="4">
                  <FormControl.Label>Code</FormControl.Label>
                  <FormControl.HelperText my={4}>
                    Please enter the code sent to your email address to verify
                    it
                  </FormControl.HelperText>
                  <OtpInput otp={otp} setOtp={setOtp} />

                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors.otp}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>
            </Center>
            <Box mx={4} flexDir={"row"} justifyContent={"space-between"}>
              <Button
                variant={"ghost"}
                w={"24"}
                startIcon={<Icon as={Ionicons} name="arrow-back" />}
                onPress={() => {
                  navigation.navigate("Email input");
                }}
              >
                Back
              </Button>
              <Button
                isDisabled={!isResendAvailable}
                onPress={sendOtp}
                variant={"ghost"}
                w={"24"}
              >
                {isResendAvailable ? "Resend" : "Sent"}
              </Button>
              <Button
                variant={"ghost"}
                w={"24"}
                endIcon={<Icon as={Ionicons} name="arrow-forward" />}
                onPress={() => handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </Formik>
  );
};

export default OtpVerification;
