import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";
import { MyText } from "../../../../constants/DefaultElements";

const OrderCard = ({ content }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text rfz={18} w600>
          Imie Nazwisko:
        </Text>
        <Text>
          {content.firstName} {content.secondName}
        </Text>
      </View>
      <View>
        <Text rfz={18} w600>
          Data:
        </Text>
        <Text>{content.date}</Text>
      </View>
      <View>
        <Text rfz={18} w600>
          Zamówienie:
        </Text>
        <Text>{content.order}</Text>
      </View>
      <View>
        <Text rfz={18} w600>
          Resto:
        </Text>
        <Text>{content.resto}</Text>
      </View>
      <View>
        <Text rfz={18} w600>
          Cena:
        </Text>
        <Text>{content.price}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.shadedText,
    padding: 17,
    gap: 10,
  },
});
