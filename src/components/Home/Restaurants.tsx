import { View, StyleSheet } from "react-native";

//content
import data from "../../../constants/restaurantsData";

//components
import Restaurant from "./RestaurantsComponents/Restaurant";
import { MyText } from "../../../constants/DefaultElements";

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
        <MyText fz={18} fw="700">
          Lista restauracji
        </MyText>
        <MyText>Więcej...</MyText>
      </View>
      <View style={{ alignItems: "center", gap: 10 }}>
        {data.map((item) => (
          <Restaurant key={item.id} content={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10 },
  dishesHeader: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Restaurants;
