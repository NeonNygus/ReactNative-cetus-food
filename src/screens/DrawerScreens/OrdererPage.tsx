import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

//components
import Clock from "../../components/Clock";
import { MyText } from "../../../constants/DefaultElements";

const data = [
  {
    title: "2x Zestaw #2",
    desc: "Zupa krem brokułowy + Placki ziemniaczne z gulaszem",
  },
  {
    title: "1x Zestaw #1",
    desc: "Zupa krem brokułowy + Placki ziemniaczne z gulaszem",
  },
  {
    title: "3x Zupa",
    desc: "Zupa krem brokułowy",
  },
  {
    title: "3x Drugie danie",
    desc: "Placki ziemniaczne z gulaszem",
  },
];

const OrdererPage = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <MyText fz={22} fw="700">
            Panel zamawiającego:
          </MyText>
          <View style={styles.cart}>
            <MyText fz={19} fw="700" style={{ textAlign: "center" }}>
              Na wykonanie obowiązków nasz określony czas!!!
            </MyText>
            <MyText style={{ width: "80%" }}>
              Przejrzyj skompletowane zamówienia i zamów. Czas do złożenia
              zamówienia:
            </MyText>
            <Clock />
          </View>
          <View
            style={{
              gap: 15,
              paddingVertical: 30,
              borderStyle: "dashed",
              borderBottomWidth: 2,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../../assets/img/Restaurants/Majeranek_icon.png")}
              />
              <MyText fz={18} fw="500">
                Tel. 123 123 123
              </MyText>
            </View>
            <View style={{ gap: 10 }}>
              <MyText fz={18} fw="400">
                Zamówienia do Majeranek
              </MyText>
              <View
                style={{
                  width: "80%",
                  alignSelf: "center",
                  gap: 10,
                }}
              >
                {data.map((item, index) => (
                  <View key={index}>
                    <MyText>
                      • <MyText fw="700">{item.title}</MyText>
                      <MyText> - {item.desc}</MyText>
                    </MyText>
                  </View>
                ))}
              </View>
              <MyText fz={18}>
                Łączna kwota zamówienia:{" "}
                <MyText fz={18} fw="700" co="primary">
                  123,34 zł
                </MyText>
              </MyText>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <MyText fz={18}>Łączna kwota wszystkich zamówień: </MyText>
            <MyText fz={20} fw="700">
              350,22 zł
            </MyText>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default OrdererPage;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 29, gap: 19, backgroundColor: "#FFF" },
  cart: {
    width: "100%",
    height: 200,
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 9,
    alignItems: "center",
    padding: 12,
    gap: 16,
  },
});
