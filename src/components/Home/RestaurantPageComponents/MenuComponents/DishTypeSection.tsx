import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Colors from "../../../../../constants/Colors";
import DishListElement from "./DishListElement";
import dishesData from "../../../../../constants/dishesData";

const DishTypeSection = ({ dishType, restaurantName }: any) => {
  return (
    <View>
      {dishesData.some(
        (item) => item.type == dishType && item.restaurant == restaurantName
      ) && <Text style={styles.h1}>Drugie danie: </Text>}

      {dishesData.map((item, index) =>
        item.type == dishType && item.restaurant == restaurantName ? (
          <DishListElement key={index} content={item} />
        ) : null
      )}
    </View>
  );
};

export default DishTypeSection;

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
  h2: {
    color: Colors.textGray,
    fontWeight: "600",
    fontSize: 20,
  },
});
