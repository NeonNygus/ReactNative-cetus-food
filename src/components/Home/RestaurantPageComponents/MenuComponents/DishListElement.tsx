import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useOrder } from "../../../../store/useOrder";

const DishListElement = ({ content }) => {
  const { addOrder } = useOrder();
  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <View>
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
            style={{
              color: Colors.shadedText,
              fontSize: 13,
              fontWeight: "400",
            }}
          >
            {content.description}
          </Text>
        </View>
      </View>
      <View style={{ width: "20%" }}>
        <TouchableOpacity
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => addOrder(content.id)}
        >
          <Ionicons name="add" size={39} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishListElement;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    maxHeight: 100,
    marginVertical: 9,
    paddingVertical: 11,
    paddingHorizontal: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 9,
    borderColor: Colors.textGray,
    flexDirection: "row",
  },
});
