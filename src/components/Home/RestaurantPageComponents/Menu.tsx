import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Colors from "../../../../constants/Colors";
import ButtonsGroup from "./MenuComponents/ButtonsGroup";
import AllDishes from "./MenuComponents/AllDishes";
import Sorted from "./MenuComponents/Sorted";
import DishTypeSection from "./MenuComponents/DishTypeSection";
const Menu = ({ restaurantName }: any) => {
  const [filter, setFilter] = useState(0);
  function changeFilter(id: number) {
    setFilter(id);
  }
  return (
    <View>
      <Text style={styles.h1}>Menu</Text>
      <ButtonsGroup changeFilter={changeFilter} />
      <View style={{ minHeight: 390 }}>
        {/* {filter == 0 && (
          <AllDishes
            setMenuHeight={setMenuHeight}
            restaurantName={restaurantName}
          />
        )}
        {filter == 1 && <Sorted restaurantName={restaurantName} />}
        {filter == 2 && <SetMeals restaurantName={restaurantName} />}
        {filter == 3 && <Soups restaurantName={restaurantName} />}
        {filter == 4 && <MainCourses restaurantName={restaurantName} />} */}
        {filter == 0 && <AllDishes restaurantName={restaurantName} />}
        {filter == 1 && <Sorted restaurantName={restaurantName} />}
        {filter == 2 && (
          <DishTypeSection dishType="Zestaw" restaurantName={restaurantName} />
        )}
        {filter == 3 && (
          <DishTypeSection dishType="Zupa" restaurantName={restaurantName} />
        )}
        {filter == 4 && (
          <DishTypeSection
            dishType="Drugie danie"
            restaurantName={restaurantName}
          />
        )}
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
