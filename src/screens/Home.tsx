import { View, StyleSheet, ScrollView } from "react-native";

//components
import Header from "../components/Home/Header";
import Dishes from "../components/Home/Dishes";
import Restaurants from "../components/Home/Restaurants";
import BottomSheet from "../components/BottomSheet";
import { Stack, Text, SizableText, XStack, YStack, Sheet } from "tamagui";
import { SheetDemo } from "../components/Sheet";
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
      <SheetDemo />
      {/* <BottomSheet /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 30,
    gap: 30,
  },
});
