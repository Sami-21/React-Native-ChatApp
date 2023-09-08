import { HStack, Input } from "native-base";
import { useRef } from "react";

const OtpInput: React.FC<any> = ({ otp, setOtp }) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (value: any, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && !otp[index]) {
      // Move focus to the previous field and clear its value
      inputRefs[index - 1].current.focus();
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };

  return (
    <HStack
      w="full"
      space={"10"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      {otp.map((digit: string, index: number) => (
        <Input
          key={index}
          ref={inputRefs[index]} // Attach the ref to the Input component
          flex={1}
          fontSize={18}
          textAlign={"center"}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(value) => handleChange(value, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              handleBackspace(index);
            }
          }}
        />
      ))}
    </HStack>
  );
};

export default OtpInput;
