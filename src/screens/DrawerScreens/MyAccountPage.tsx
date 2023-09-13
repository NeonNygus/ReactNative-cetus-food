import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

//components
import { MyText } from "../../../constants/DefaultElements";
import Colors from "../../../constants/Colors";

const sexOptions = ["Mężczyzna", "Kobieta"];
const languageOptions = [
  "Polski",
  "English",
  "Español",
  "Deutsch",
  "Français",
  "한국어",
  "Italiano",
  "",
];

const MyAccountPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MyText rfz={32} w700>
          Moje konto:
        </MyText>
        <View style={{ alignItems: "center", gap: 20 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              resizeMode: "cover",
            }}
            source={require("../../../assets/img/MyAccount/neonnygus.jpg")}
          />
          <View style={{ gap: 10 }}>
            <MyText w700>Imie:</MyText>
            <TextInput
              style={{
                minWidth: "100%",
                height: 40,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <MyText w700>Nazwisko:</MyText>
            <TextInput
              style={{
                minWidth: "100%",
                height: 40,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <MyText w700>Hasło:</MyText>
            <TextInput
              secureTextEntry
              style={{
                minWidth: "100%",
                height: 40,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <MyText w700>e-mail:</MyText>
            <TextInput
              style={{
                minWidth: "100%",
                height: 40,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <MyText w700>Telefon (opcjonalnie):</MyText>
            <TextInput
              style={{
                minWidth: "100%",
                height: 40,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={{ gap: 10 }}>
            <MyText w700>Adres (opcjonalnie):</MyText>
            <TextInput
              style={{
                minWidth: "100%",
                height: 40,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
            <View style={{ gap: 10, width: "50%" }}>
              <MyText w700>Płeć (opcjonalnie):</MyText>
              <SelectDropdown
                data={sexOptions}
                defaultButtonText="Pamiętaj, są tylko dwie płcie!"
                buttonTextStyle={{
                  textAlign: "left",
                  fontSize: 16,
                }}
                buttonStyle={{
                  width: "100%",
                  height: 40,
                  borderColor: Colors.shadedText,
                  borderWidth: 1,
                  borderRadius: 6,
                  justifyContent: "flex-start",
                }}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
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
            <View style={{ gap: 10, width: "50%" }}>
              <MyText w700>Język (opcjonalnie):</MyText>
              <SelectDropdown
                data={languageOptions}
                defaultButtonText="Wybierz język"
                buttonTextStyle={{
                  textAlign: "left",
                  fontSize: 16,
                }}
                buttonStyle={{
                  width: "100%",
                  height: 40,
                  borderColor: Colors.shadedText,
                  borderWidth: 1,
                  borderRadius: 6,
                  justifyContent: "flex-start",
                }}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
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
          </View>
          <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
            <View style={{ gap: 10, width: "100%" }}>
              <MyText w700>Data urodzin (opcjonalnie):</MyText>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <SelectDropdown
                  data={sexOptions}
                  defaultButtonText="Kwiecień"
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 16,
                  }}
                  buttonStyle={{
                    width: "30%",
                    height: 40,
                    borderColor: Colors.shadedText,
                    borderWidth: 1,
                    borderRadius: 6,
                    justifyContent: "flex-start",
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
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
                <SelectDropdown
                  data={sexOptions}
                  defaultButtonText="7"
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 16,
                  }}
                  buttonStyle={{
                    width: "15%",
                    height: 40,
                    borderColor: Colors.shadedText,
                    borderWidth: 1,
                    borderRadius: 6,
                    justifyContent: "flex-start",
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
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
                <SelectDropdown
                  data={sexOptions}
                  defaultButtonText="2001"
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 16,
                  }}
                  buttonStyle={{
                    width: "25%",
                    height: 40,
                    borderColor: Colors.shadedText,
                    borderWidth: 1,
                    borderRadius: 6,
                    justifyContent: "flex-start",
                  }}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
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
            </View>
          </View>
          <View style={{ gap: 10 }}>
            <MyText w700>Opis (opcjonalnie):</MyText>
            <TextInput
              style={{
                minWidth: "100%",
                minHeight: 110,
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderRadius: 6,
              }}
            />
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity style={styles.button}>
            <MyText w600 primary>
              Zapisz zmiany
            </MyText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccountPage;

const styles = StyleSheet.create({
  container: {
    padding: 29,
    gap: 17,
  },
  button: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 9,
    padding: 9,
    paddingHorizontal: 25,
  },
});
