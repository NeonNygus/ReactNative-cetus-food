import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useOrder } from "../../../store/useOrder";

//components
import { MyText } from "../../../../constants/DefaultElements";

const DishListElement = ({ content, navigateToDish }) => {
  const { addOrder } = useOrder();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToDish(content.name)}
    >
      <View style={{ width: "80%" }}>
        <MyText fw="700">{content.name}</MyText>
        <MyText fw="700">
          {new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN",
          }).format(content.price)}
        </MyText>
        <MyText fz={13} fw="400" co="shaded">
          {content.description}
        </MyText>
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
    </TouchableOpacity>
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
