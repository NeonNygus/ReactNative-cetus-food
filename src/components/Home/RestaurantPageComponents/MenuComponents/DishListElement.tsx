import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../../../constants/Colors";

const DishListElement = ({ content }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            color: Colors.textGray,
            fontWeight: "700",
          }}
        >
          {content.name}
        </Text>
        <Text
          style={{
            color: Colors.textGray,
            fontWeight: "700",
          }}
        >
          {new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN",
          }).format(content.price)}
        </Text>
      </View>
      <View>
        <Text
          style={{ color: Colors.shadedText, fontSize: 13, fontWeight: "400" }}
        >
          {content.description}
        </Text>
      </View>
    </View>
  );
};

export default DishListElement;

const styles = StyleSheet.create({
  container: {
    marginVertical: 9,
    paddingVertical: 11,
    paddingHorizontal: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 9,
    borderColor: Colors.textGray,
  },
});
