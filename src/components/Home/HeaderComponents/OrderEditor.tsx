import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../../../constants/Colors";

const OrderEditor = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.textGray, fontSize: 19, fontWeight: "700" }}>
        Twoje zamówienie:
      </Text>
      <Text style={{ color: Colors.shadedText }}>
        Zestaw #2 - Zupa krem brokułowy + Placki ziemniaczne z gulaszem + Zestaw
        #1 - Zupa krem brokułowy + Placki ziemniaczne z gulaszem
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: Colors.textGray, fontSize: 19, fontWeight: "700" }}
        >
          59,00 zł
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: "500",
                paddingHorizontal: 5,
              }}
            >
              Edytuj
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.textGray,
                fontWeight: "500",
                paddingHorizontal: 5,
              }}
            >
              Usuń
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderEditor;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 9,
  },
});
