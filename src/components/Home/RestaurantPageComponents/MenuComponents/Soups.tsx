import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Colors from "../../../../../constants/Colors";
import DishListElement from "./DishListElement";
import dishesData from "../../../../../constants/dishesData";

const Soups = ({ restaurantName }) => {
  return (
    <View>
      {dishesData.some(
        (item) => item.type == "Zupa" && item.restaurant == restaurantName
      ) && <Text style={styles.h1}>Zupa: </Text>}

      {dishesData.map((item, index) =>
        item.type == "Zupa" && item.restaurant == restaurantName ? (
          <DishListElement key={index} content={item} />
        ) : null
      )}
    </View>
  );
};

export default Soups;

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
});
