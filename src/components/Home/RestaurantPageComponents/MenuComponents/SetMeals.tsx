import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Colors from "../../../../../constants/Colors";
import DishListElement from "./DishListElement";
import dishesData from "../../../../../constants/dishesData";

const SetMeals = ({ restaurantName }) => {
  return (
    <View>
      {dishesData.some(
        (item) => item.type == "Zestaw" && item.restaurant == restaurantName
      ) && <Text style={styles.h1}>Zestawy: </Text>}
      {dishesData.map((item, index) =>
        item.type == "Zestaw" && item.restaurant == restaurantName ? (
          <DishListElement key={index} content={item} />
        ) : null
      )}
    </View>
  );
};

export default SetMeals;

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
});
