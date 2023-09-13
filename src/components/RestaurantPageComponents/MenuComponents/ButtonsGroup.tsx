import { StyleSheet, View } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import Colors from "../../../../constants/Colors";

//components
import { MyText } from "../../../../constants/DefaultElements";

const ButtonsGroup = ({ changeFilter }) => {
  const [clicked, setClicked] = useState(0);
  const buttons = [
    "Wszystkie",
    "Od najtańszych",
    "Zestaw",
    "Zupa",
    "Drugie danie",
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {buttons.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, clicked == index && styles.buttonActive]}
            onPress={() => (setClicked(index), changeFilter(index))}
          >
            <MyText style={clicked == index && styles.textActive}>
              {item}
            </MyText>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ButtonsGroup;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: "row",
    gap: 19,
  },
  button: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.shadedText,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 17,
  },
  buttonActive: {
    backgroundColor: Colors.textGray,
  },
  textActive: {
    color: "#fff",
  },
});
