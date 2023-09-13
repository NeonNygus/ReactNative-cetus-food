import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MyText } from "../../../../constants/DefaultElements";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../../../constants/Colors";
import SelectDropdown from "react-native-select-dropdown";

const RestaurantCard = ({ restaurant }) => {
  const [unfolded, setUnfolded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ gap: 10, padding: 19 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              width: "60%",
            }}
          >
            <Image
              source={restaurant.image}
              style={{
                borderRadius: 1000,
                height: 70,
                width: 70,
                resizeMode: "contain",
              }}
            />
            <View>
              <MyText rfz={20}>{restaurant.name}</MyText>
            </View>
          </View>
          <TouchableOpacity onPress={() => setUnfolded((s) => !s)}>
            <AntDesign name={unfolded ? "down" : "right"} size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <MyText rfz={18} w700>
            Telefon: <MyText rfz={18}>{restaurant.phone}</MyText>
          </MyText>
          <MyText rfz={18} w700>
            Adres: <MyText rfz={18}>{restaurant.address}</MyText>
          </MyText>
          <MyText rfz={18} w700>
            Link: <MyText rfz={18}>{restaurant.link}</MyText>
          </MyText>
          <MyText rfz={18} w700>
            Desc: <MyText rfz={18}>{restaurant.desc}</MyText>
          </MyText>
          <MyText rfz={18} w700 primary center>
            foiasdasdasd
          </MyText>
        </View>
      </View>
      {unfolded && (
        <View
          style={{
            padding: 19,
            gap: 24,
            borderTopWidth: 1,
            borderColor: Colors.shadedText,
          }}
        >
          <View style={{ gap: 16 }}>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                borderColor: Colors.red,
                borderWidth: 1,
                borderRadius: 13,
                padding: 7,
                paddingHorizontal: 30,
              }}
            >
              <MyText rfz={16} red>
                Usuń restaurację
              </MyText>
            </TouchableOpacity>
            <MyText rfz={16} w700>
              Edytuj użytkownika:
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
              <TextInput
                placeholder="Podaj nazwisko"
                style={styles.textInput}
              />
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
              <MyText style={{ color: Colors.primary }}>Zapisz zmiany</MyText>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", gap: 30 }}>
            <MyText rfz={16} center>
              Zadłużenie w tym miesiącu:{" "}
              <MyText rfz={17} red w700>
                -120,30zł
              </MyText>
            </MyText>
            <View>
              <MyText rfz={16} center>
                Poprzednie miesiące:{" "}
                <MyText rfz={17} w700>
                  0,00zł
                </MyText>
              </MyText>
              <MyText rfz={16} center>
                Status zadłużenia:{" "}
                <MyText rfz={17} primary w700>
                  brak zadłużenia
                </MyText>
              </MyText>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.shadedText,
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
    width: "40%",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    alignItems: "center",
  },
});
