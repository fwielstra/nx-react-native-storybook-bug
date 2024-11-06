import { Alert, Pressable, Text } from "react-native";

export const Button = () => {
  return (
    <Pressable style={{backgroundColor: "#ff0000"}} onPress={() => Alert.alert("y halo thar")}>
      <Text>Press me</Text>
    </Pressable>
  );
};
