import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useOrder } from "../../store/useOrder";
//content
import data from "../../../constants/dishesData";
import restaurantsData from "../../../constants/restaurantsData";

//components
import Dish from "./DishesComponents/Dish";

export type DishType = {
  id: number;
  name: string;
  restaurant: string;
  description: string;
  price: number;
  type: string;
};

const Dishes = () => {
  const { orders } = useOrder();
  console.log(orders);
  return (
    <View style={styles.container}>
      <View style={styles.dishesHeader}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Zamów to co znajomi
        </Text>
        <Text>Więcej...</Text>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Dish content={item} />}
      />
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

export default Dishes;
