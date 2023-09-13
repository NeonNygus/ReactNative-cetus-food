import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MyText } from "../../../constants/DefaultElements";
import Colors from "../../../constants/Colors";

//components
import RestaurantCard from "./RestaurantsTabComponents/RestaurantCard";

const data = [
  {
    name: "Catering Kulinaria",
    address: "Zawiszy Czarnego 16, 35-082 Rzeszów",
    phone: "345-163-456",
    link: "majeranek.rzeszow.pl",
    desc: "Oferujemy dania na różne okoliczności: catering na imprezy okolicznościowe rodzinne i firmowe, obiady do domu i firmy...",
    image: require("../../../assets/img/Restaurants/Kulinaria.png"),
  },
  {
    name: "McDilan's",
    address: "Hetmańska 16, 35-069 Rzeszów",
    phone: "246-486-351",
    link: "mcdilan.rzeszow.pl",
    desc: "Oferujemy dania na różne okoliczności: catering na imprezy okolicznościowe rodzinne i firmowe, obiady do domu i firmy...",
    image: require("../../../assets/img/Restaurants/McDilan's.png"),
  },
];

const RestaurantsTab = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <MyText rfz={18} w700>
            Dodawanie restauracji:
          </MyText>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Nazwa: </MyText>
            <TextInput placeholder="Podaj nazwę" style={styles.textInput} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Adres: </MyText>
            <TextInput placeholder="Podaj adres" style={styles.textInput} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Telefon: </MyText>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              placeholder="Podaj numer telefonu"
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <MyText rfz={18}>Link do strony: </MyText>
            <TextInput
              keyboardType="url"
              placeholder="Podaj link"
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              width: "100%",
              gap: 20,
            }}
          >
            <MyText rfz={18}>Opis: </MyText>
            <TextInput
              placeholder="Podaj opis restauracji"
              style={[styles.textInput, { height: 140 }]}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <MyText style={{ color: Colors.primary }}>
              Dodaj restuarację +
            </MyText>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <MyText rfz={18}>Lista restauracji:</MyText>
          <View style={{ gap: 20 }}>
            <TextInput
              placeholder="Podaj nazwę restauracji..."
              style={[styles.textInput, { height: 40, width: "100%" }]}
            />
            {data.map((item, index) => (
              <RestaurantCard restaurant={item} key={index} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantsTab;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.shadedText,
    padding: 19,
    gap: 34,
    backgroundColor: "#FFF",
  },
  section: {
    gap: 20,
  },
  textInput: {
    width: "70%",
    height: 30,
    borderWidth: 1,
    borderColor: Colors.shadedText,
    borderRadius: 10,
    backgroundColor: "#FFF",
    elevation: 0,
    paddingHorizontal: 10,
  },
  button: {
    width: "60%",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    alignItems: "center",
  },
});
