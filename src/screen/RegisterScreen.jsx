import { Text, View } from "react-native";
import React from "react";
import Register from "../components/auth/Register";

export default function RegisterScreen({navigation}) {
  return (
    <View>
      <Register navigation={navigation} />
    </View>
  );
}
