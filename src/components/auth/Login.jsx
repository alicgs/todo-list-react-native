import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { loginForm } from "../../utils/const/authForm.js";
import { setLoader } from "../../redux/generalSlice";
import { useDispatch } from "react-redux";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    
    const changePage = () => {
      dispatch(setLoader());
      navigation.navigate("Register");
    }

  return (
    <View className="flex-auto items-center justify-center px-5 bg-white pt-[170px]">
      <View>
        <Image
          className=" w-96 h-64"
          source={require("../../../assets/images/logo-t.png")}
        />
      </View>
    
      <View className="w-full" >
      <FlatList
        data={loginForm}
        renderItem={({ item }) => (
          <View className="mt-5 w-full">
            <Input item={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      </View>

      <TouchableOpacity onPress={changePage} className="w-full mt-5">
        <Button title={"Login"} />
      </TouchableOpacity>

      <View className="w-full mt-5 flex-row mb-[270px]">
        <Text className="text-primary">Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-primary font-[600] ml-[7px] underline">
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
