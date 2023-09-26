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
import SelectDropdown from "react-native-select-dropdown";

//components
import UserCard from "./UsersTabComponents/UserCard";

const roles = {
  1: "Admin",
  2: "Pracownik",
  3: "Student (debil)",
};

const data = [
  {
    firstName: "Lilia",
    secondName: "Skórska",
    orderer: false,
    debt: -420.69,
    role: roles[2],
    image: require("../../../assets/img/Admin/UsersTab/UserCard/lilia.jpg"),
  },
  {
    firstName: "Karolina",
    secondName: "Rząsa",
    orderer: true,
    debt: -34.5,
    role: roles[3],
    image: require("../../../assets/img/Admin/UsersTab/UserCard/karola.jpg"),
  },
  {
    firstName: "Jakub",
    secondName: "Lula",
    orderer: false,
    debt: -9.0,
    role: roles[2],
    image: require("../../../assets/img/Admin/UsersTab/UserCard/jakub.jpg"),
  },
  {
    firstName: "Łukasz",
    secondName: "Rząsa",
    orderer: false,
    debt: 0.0,
    role: roles[1],
    image: require("../../../assets/img/Admin/UsersTab/UserCard/lukasz.jpg"),
  },
];

const UsersTab = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <MyText rfz={18} w700>
            Dodawanie użytkownika:
          </MyText>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Imie: </MyText>
            <TextInput placeholder="Podaj imie" style={styles.textInput} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Nazwisko: </MyText>
            <TextInput placeholder="Podaj nazwisko" style={styles.textInput} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>E-mail: </MyText>
            <TextInput placeholder="Podaj e-mail" style={styles.textInput} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <MyText rfz={18}>Rola/Status: </MyText>
            <SelectDropdown
              data={["Admin", "Pracownik", "Student (debil)"]}
              defaultButtonText="Wybierz rolę"
              buttonTextStyle={{
                textAlign: "left",
                fontSize: 15,
              }}
              buttonStyle={{
                width: "50%",
                height: 30,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#FFF",
                justifyContent: "flex-start",
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <MyText style={{ color: Colors.primary }}>
              Dodaj użytkownika +
            </MyText>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <MyText rfz={18}>Lista użytkowników:</MyText>
          <View style={{ gap: 20 }}>
            <TextInput
              placeholder="Kogo szukasz..."
              style={[styles.textInput, { height: 40, width: "100%" }]}
            />
            {data.map((item, index) => (
              <UserCard user={item} key={index} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UsersTab;

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
