import {  View, FlatList } from "react-native";
import React from "react";
import PriceItem from "./Priceltem";
import { premiumPackages } from "../../utils/const/premiumPrice";

export default function Price() {
  return (
    <View>
      <FlatList
        data={premiumPackages}
        renderItem={({ item }) => <PriceItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
