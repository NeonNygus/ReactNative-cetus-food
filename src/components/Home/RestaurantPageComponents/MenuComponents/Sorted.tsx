import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Colors from "../../../../../constants/Colors";
import DishListElement from "./DishListElement";
import dishesData from "../../../../../constants/dishesData";

const Sorted = ({ restaurantName }) => {
  const sortedMeals = dishesData.sort((a, b) => {
    return a.price - b.price;
  });
  return (
    <View>
      {sortedMeals.map((item, index) =>
        item.restaurant == restaurantName ? (
          <DishListElement key={index} content={item} />
        ) : null
      )}
    </View>
  );
};

export default Sorted;

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
});
