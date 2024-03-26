import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export default function ListItem() {
  const [isChecked, setChecked] = useState(false);
  const handleCheckbox = () => setChecked(!isChecked);

  return (
    <TouchableOpacity
      onPress={handleCheckbox}
      className={`border-[2px] border-white ${
        isChecked && "border-main"
      }  bg-white rounded-[6px] px-[10px] py-[10px] flex-row justify-between items-center mt-[10px]`}
    >
      <View className="flex-row gap-5 items-center">
        <View>
          <MaterialCommunityIcons name="run-fast" size={24} color="#3B5BDB" />
        </View>
        <View>
          <Text className="text-primary text-[13px]">Sabah Sporu</Text>
          <Text
            className={`mt-[3px] text-secondary text-[11px] ${
              isChecked && "line-through"
            }`}
          >
            Sabah 08:00 da yürüyüşe çık
          </Text>
        </View>
      </View>
      <View>
        <Checkbox
        style={{borderColor:"#cfcfcf"}}
          className="rounded-[10px]"
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked && "#3B5BDB"}
        />
      </View>
    </TouchableOpacity>
  );
}

