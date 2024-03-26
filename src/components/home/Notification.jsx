import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Notification({setModalVisible}) {
  return (
    <View className="bg-[#343a4080] w-full h-full">
          <View className="w-80 h-full bg-white absolute right-0">
            <View className="p-[10px]">
              <Text className="font-medium text-primary text-[16px]">
                Duyrular
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="w-[32px] h-[32px] rounded-full absolute right-[10px] top-[10px] justify-center items-center bg-[#F8F9FA] "
              >
                <SimpleLineIcons name="close" size={24} color="#343a4080" />
              </TouchableOpacity>
              <View className="mt-5">
                <TouchableOpacity className=" bg-[#F8F9FA] flex-row justify-between items-center p-[10px]">
                  <View className="flex-row gap-[7px] items-center">
                    <MaterialCommunityIcons
                      name="email-multiple"
                      size={20}
                      color="black"
                    />

                    <View>
                      <Text className="text-primary text-[13px]">
                        Yeni güncelleme geldi
                      </Text>
                      <Text className="text-secondary text-[10px] mt-[3px]">
                        V1.4.3
                      </Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>

                <TouchableOpacity className="mt-[10px] flex-row justify-between items-center p-[10px]">
                  <View className="flex-row gap-[7px] items-center">
                    <MaterialCommunityIcons
                      name="email-multiple"
                      size={20}
                      color="black"
                    />

                    <View>
                      <Text className="text-primary text-[13px]">
                        Yeni güncelleme geldi
                      </Text>
                      <Text className="text-secondary text-[10px] mt-[3px]">
                        V1.4.3
                      </Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>

                <TouchableOpacity className="mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]">
                  <View className="flex-row gap-[7px] items-center">
                    <MaterialCommunityIcons
                      name="email-multiple"
                      size={20}
                      color="black"
                    />

                    <View>
                      <Text className="text-primary text-[13px]">
                        Yeni güncelleme geldi
                      </Text>
                      <Text className="text-secondary text-[10px] mt-[3px]">
                        V1.4.3
                      </Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>

                <TouchableOpacity className="mt-[10px]  flex-row justify-between items-center p-[10px]">
                  <View className="flex-row gap-[7px] items-center">
                    <MaterialCommunityIcons
                      name="email-multiple"
                      size={20}
                      color="black"
                    />

                    <View>
                      <Text className="text-primary text-[13px]">
                        Yeni güncelleme geldi
                      </Text>
                      <Text className="text-secondary text-[10px] mt-[3px]">
                        V1.4.3
                      </Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>

                <TouchableOpacity className="mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]">
                  <View className="flex-row gap-[7px] items-center">
                    <MaterialCommunityIcons
                      name="email-multiple"
                      size={20}
                      color="black"
                    />

                    <View>
                      <Text className="text-primary text-[13px]">
                        Yeni güncelleme geldi
                      </Text>
                      <Text className="text-secondary text-[10px] mt-[3px]">
                        V1.4.3
                      </Text>
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>

                
              </View>
            </View>
          </View>
        </View>
  )
}

