import { View, Text, StyleSheet } from "react-native";

//content
import data from "../../../constants/restaurantsData";

//components
import Restaurant from "./RestaurantsComponents/Restaurant";

export type RestaurantType = {
  id: number;
  name: string;
  address: string;
  ordersHour: string;
  pricesRange: number[];
  rating: number;
};

const Restaurants = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dishesHeader}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Lista restauracji
        </Text>
        <Text>Więcej...</Text>
      </View>
      {data.map((item) => (
        <Restaurant key={item.id} content={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "8%",
  },
  dishesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Restaurants;
