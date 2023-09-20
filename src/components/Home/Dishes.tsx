import { View, FlatList, StyleSheet } from "react-native";
//content
import data from "../../../constants/dishesData";

//components
import Dish from "./DishesComponents/Dish";
import { MyText } from "../../../constants/DefaultElements";

export type DishType = {
  id: number;
  name: string;
  restaurant: string;
  description: string;
  price: number;
  type: string;
};

const Dishes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dishesHeader}>
        <MyText fz={18} fw="700">
          Zamów to co znajomi
        </MyText>
        <MyText>Więcej...</MyText>
      </View>

      <FlatList
        style={{ overflow: "visible" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Dish content={item} />}
        ItemSeparatorComponent={() => <View style={{ width: 17 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 5 },
  dishesHeader: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Dishes;
