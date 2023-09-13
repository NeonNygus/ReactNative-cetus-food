import { View, StyleSheet, ScrollView } from "react-native";

//components
import Header from "../components/Home/Header";
import Dishes from "../components/Home/Dishes";
import Restaurants from "../components/Home/Restaurants";
import BottomSheet from "../components/BottomSheet";
export default function Home({ navigation }) {
  function navigateToRestaurant(name) {
    navigation.navigate(name);
  }
  function navigateToDish(name) {
    navigation.navigate(name);
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Dishes navigateToDish={navigateToDish} />
          <Restaurants navigateToRestaurant={navigateToRestaurant} />
        </View>
      </ScrollView>

      <BottomSheet />
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
