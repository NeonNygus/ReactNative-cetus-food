import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
//components
import Header from "../components/Home/Header";
import Dishes from "../components/Home/Dishes";
import Restaurants from "../components/Home/Restaurants";
import BottomSheet from "../components/Home/BottomSheet";

export default function Home() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Dishes />
          <Restaurants />
        </View>
      </ScrollView>

      <BottomSheet />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: -30,
    backgroundColor: "#fff",
  },
});
