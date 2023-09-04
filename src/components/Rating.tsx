import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicon from "@expo/vector-icons/Ionicons";

const Rating = ({ rating }) => {
  const starsAmount: number = rating;
  const stars = [];
  for (let i = 1; i <= starsAmount; i++) {
    stars.push(
      <Ionicon
        key={i}
        name="star"
        size={16}
        color={"#FFC904"}
        style={{ marginHorizontal: 1 }}
      />
    );
  }
  for (let i = starsAmount + 1; i <= 5; i++) {
    stars.push(
      <Ionicon
        key={i}
        name="star-outline"
        size={16}
        style={{ marginHorizontal: 1 }}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ fontSize: 19 }}>{starsAmount}/5</Text>
      <View style={{ flexDirection: "row", marginLeft: 4 }}>{stars}</View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
