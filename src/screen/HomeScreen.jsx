import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/Header";
import List from "../components/home/List";
import PremiumBaner from "../components/shared/PremiumBaner";
import Completed from "../components/home/Completed";
import { ScrollView } from "react-native";
import Notification from "../components/home/Notification";
import Modal from "../components/shared/Modal";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header setModalVisible={setModalVisible} />
        <List />
        <PremiumBaner />
        <Completed />
      </ScrollView>

        <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} animation={"fade"}>
        <Notification setModalVisible={setModalVisible}/>
        </Modal>

    </SafeAreaView>
  );
}
