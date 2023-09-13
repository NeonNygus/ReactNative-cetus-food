import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Ionicon from "@expo/vector-icons/Ionicons";

//components
import { MyText } from "../../constants/DefaultElements";

const windowWidth = Dimensions.get("window").width;

const Rating = ({ rating }) => {
  const starsAmount: number = rating;
  const stars = [];
  for (let i = 1; i <= starsAmount; i++) {
    stars.push(
      <Ionicon
        key={i}
        name="star"
        size={(4 / 100) * windowWidth}
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
        size={(4 / 100) * windowWidth}
        style={{ marginHorizontal: 1 }}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MyText fz={(4 / 100) * windowWidth}>{starsAmount}/5</MyText>
      <View style={{ flexDirection: "row", marginLeft: 4 }}>{stars}</View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
