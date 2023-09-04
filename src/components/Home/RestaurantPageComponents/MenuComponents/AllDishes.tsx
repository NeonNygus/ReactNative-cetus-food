import { StyleSheet, View } from "react-native";
import Colors from "../../../../../constants/Colors";
import SetMeals from "./SetMeals";
import Soups from "./Soups";
import MainCourses from "./MainCourses";

const AllDishes = ({ restaurantName, setMenuHeight }) => {
  return (
    <View
      onLayout={(e) => {
        var { x, y, width, height } = e.nativeEvent.layout;
        setMenuHeight(height);
      }}
    >
      <SetMeals restaurantName={restaurantName} />
      <Soups restaurantName={restaurantName} />
      <MainCourses restaurantName={restaurantName} />
    </View>
  );
};

export default AllDishes;

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
});
