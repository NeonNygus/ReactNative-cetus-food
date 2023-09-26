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
import DateTimePicker from "@react-native-community/datetimepicker";
import { Avatar, Checkbox } from "tamagui";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const tableHeaders = ["Miesiąc", "Kwota"];
const tableData = [
  ["Sierpień", "160,52zł"],
  ["Lipiec", "125,52zł"],
  ["Czerwiec", "115,52zł"],
  ["Maj", "5,52zł"],
];

const UserCard = ({ user }) => {
  const [unfolded, setUnfolded] = useState(false);
  const [dateOfStart, setDateOfStart] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [dateOfEnd, setDateOfEnd] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const toggleStartDatePicker = () => {
    setShowStartDatePicker(!showStartDatePicker);
  };
  const onChangeStartDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setStartDate(currentDate);
      if (Platform.OS === "android") {
        toggleStartDatePicker();
        setDateOfStart(currentDate.toDateString());
      }
    } else {
      toggleStartDatePicker();
    }
  };
  const toggleEndDatePicker = () => {
    setShowEndDatePicker(!showEndDatePicker);
  };
  const onChangeEndDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setEndDate(currentDate);
      if (Platform.OS === "android") {
        toggleEndDatePicker();
        setDateOfEnd(currentDate.toDateString());
      }
    } else {
      toggleEndDatePicker();
    }
  };

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
              source={user.image}
              style={{
                borderRadius: 1000,
                height: 70,
                width: 70,
                resizeMode: "contain",
              }}
            />
            <View>
              <MyText rfz={20}>
                {user.firstName} {user.secondName}
              </MyText>
              <MyText rfz={17} w700>
                {user.orderer && "Osoba jest zamawiającym"}
              </MyText>
            </View>
          </View>
          <TouchableOpacity onPress={() => setUnfolded((s) => !s)}>
            <AntDesign name={unfolded ? "down" : "right"} size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <MyText rfz={18}>Wysokość zadłużenia:</MyText>
            <MyText rfz={18} red w700>
              {user.debt}
            </MyText>
          </View>
          <View>
            <MyText rfz={18}>Pozycja:</MyText>
            <MyText rfz={18} w700>
              {user.role}
            </MyText>
          </View>
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
          <View style={{ gap: 16 }}>
            <MyText rfz={16} w700>
              Zablokuj użytkownika:
            </MyText>
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MyText rfz={18}>Od: </MyText>
              <Pressable onPress={toggleStartDatePicker}>
                <TextInput
                  placeholder="Wprowadź datę"
                  value={dateOfStart}
                  onChangeText={setDateOfStart}
                  editable={false}
                  style={[styles.textInput, { width: "100%" }]}
                  underlineStyle={{ display: "none" }}
                />
              </Pressable>
            </View>
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MyText rfz={18}>Do: </MyText>
              <Pressable onPress={toggleEndDatePicker}>
                <TextInput
                  placeholder="Wprowadź datę"
                  value={dateOfEnd}
                  onChangeText={setDateOfEnd}
                  editable={false}
                  style={[styles.textInput, { width: "100%" }]}
                  underlineStyle={{ display: "none" }}
                />
              </Pressable>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <MyText rfz={17}>Zablokuj użytkownika na stałe:</MyText>
              <Checkbox
                size="$5"
                borderColor={Colors.shadedText}
                borderWidth={2}
              >
                <Checkbox.Indicator>
                  <Ionicons name="checkmark" size={17} />
                </Checkbox.Indicator>
              </Checkbox>
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
          <View style={{ gap: 10 }}>
            <MyText rfz={16}>Historia opłat:</MyText>
            <View style={{ width: "100%" }}>
              <Table
                borderStyle={{
                  borderWidth: 0,
                  borderColor: Colors.shadedText,
                }}
              >
                <ScrollView>
                  <Row data={tableHeaders} padding={10} borderWidth={1} />
                  <Rows data={tableData} padding={10} borderWidth={0} />
                </ScrollView>
              </Table>
            </View>
          </View>
        </View>
      )}

      {showStartDatePicker && (
        <DateTimePicker
          mode="date"
          display="default"
          value={startDate}
          onChange={onChangeStartDate}
        />
      )}
      {showEndDatePicker && (
        <DateTimePicker
          mode="date"
          display="default"
          value={endDate}
          onChange={onChangeEndDate}
        />
      )}
    </View>
  );
};

export default UserCard;

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
