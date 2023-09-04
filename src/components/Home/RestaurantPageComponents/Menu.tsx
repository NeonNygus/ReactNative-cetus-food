import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Colors from "../../../../constants/Colors";
import ButtonsGroup from "./MenuComponents/ButtonsGroup";
import Sorted from "./MenuComponents/Sorted";
import DishTypeSection from "./MenuComponents/DishTypeSection";
import { dishTypes } from "../../../../constants/dishesData";

const Menu = ({ restaurantName }: any) => {
  const dishTypesArray = [];
  const dishTypesLength = Object.keys(dishTypes).length;
  for (let i = 0; i < dishTypesLength; i++) {
    dishTypesArray.push(dishTypes[i + 1]);
  }
  const [filter, setFilter] = useState(0);
  function changeFilter(id: number) {
    setFilter(id);
  }
  return (
    <View>
      <Text style={styles.h1}>Menu</Text>
      <ButtonsGroup changeFilter={changeFilter} />
      <View style={{ minHeight: 390 }}>
        {filter == 0 && (
          <DishTypeSection
            dishType={["Zestaw", "Zupa", "Drugie danie"]}
            restaurantName={restaurantName}
          />
        )}
        {filter == 1 && <Sorted restaurantName={restaurantName} />}

        {dishTypesArray.map((dishType, index) => (
          <>
            {filter == index + 2 && (
              <DishTypeSection
                dishType={[dishType]}
                restaurantName={restaurantName}
              />
            )}
          </>
        ))}
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
});
