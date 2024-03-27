import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { registerForm } from "../../utils/const/authForm.js";

export default function Login({ navigation }) {
  return (
    <View className="flex-auto items-center justify-center px-5 bg-white pt-[100px]">
      <View>
        <Image
          className=" w-96 h-64"
          source={require("../../../assets/images/logo-t.png")}
        />
      </View>
      <View className="w-full">
        <FlatList
          data={registerForm}
          renderItem={({ item }) => (
            <View className="mt-5 w-full">
              <Input item={item}  />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View className="w-full mt-5">
        <Button title={"Register"} />
      </View>

      <View className="w-full mt-5 flex-row mb-[270px]">
        <Text className="text-primary">Or do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-primary font-[600] ml-[7px] underline">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
