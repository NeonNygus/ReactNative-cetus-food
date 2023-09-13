import {
  StyleSheet,
  View,
  Pressable,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../../../constants/Colors";
import { MyText } from "../../../constants/DefaultElements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Checkbox } from "react-native-paper";

//components
import OrderCard from "./OrdersTabComponents/OrderCard";

const data = [
  {
    firstName: "Lilia",
    secondName: "Skórska",
    date: "28.08.2023",
    order:
      "Zestaw - Zupa fasolowa z makaronem + Karkówka pieczona w sosie BBQ + ziemniaki + surówka ",
    resto: "Kulinaria",
    price: 32.2,
  },
  {
    firstName: "Karolina",
    secondName: "Rząsa",
    date: "28.08.2023",
    order:
      "Zestaw - Fasolka po bretońsku + Smażona kiełbasa w sosie BBC + frytki + ketchup",
    resto: "Kulinaria",
    price: 30.2,
  },
  {
    firstName: "Karol",
    secondName: "Bobowski",
    date: "27.08.2023",
    order: "Burger",
    resto: "Burder Store",
    price: 27.2,
  },
  {
    firstName: "Hubert",
    secondName: "Pokrywka",
    date: "24.08.2023",
    order: "Nuggetsy",
    resto: "McDonald's",
    price: 16.2,
  },
];

const OrdersTab = () => {
  const [timeOfOrder, setTimeOfOrder] = useState("");
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [dateOfHistory, setDateOfHistory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateOfHistoryString, setDateOfHistoryString] = useState("");
  const [isSelected, setSelection] = useState(false);
  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };
  const onChangeTime = ({ type }, selectedTime) => {
    if (type == "set") {
      const currentTime = selectedTime;
      setTime(currentTime);
      if (Platform.OS === "android") {
        toggleTimePicker();
        setTimeOfOrder(
          currentTime.toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1")
        );
      }
    } else {
      toggleTimePicker();
    }
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfHistory(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };
  useEffect(() => {
    const dateString = `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  }, [date]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <MyText rfz={18} w700>
            Wyznacz godzinę zamawiania:
          </MyText>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Godzina zamawiania: </MyText>
            <Pressable onPress={toggleTimePicker} style={{ width: 80 }}>
              <TextInput
                placeholder=""
                value={timeOfOrder}
                onChangeText={setTimeOfOrder}
                editable={false}
                style={styles.textInput}
                underlineStyle={{ display: "none" }}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.section}>
          <MyText rfz={18} w700>
            Wyznacz zamawiającego:
          </MyText>
          <View style={{ gap: 10 }}>
            <MyText rfz={18}>Zamawiający: </MyText>
            <TextInput
              placeholder="Nowym zamawiającym będzie"
              style={styles.textInput}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MyText rfz={17}>Pracownicy zamawiają na zmianę: </MyText>
              <Checkbox
                status={isSelected ? "checked" : "unchecked"}
                onPress={() => setSelection((s) => !s)}
              />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <MyText rfz={18} w700>
            Historia zamówień:
          </MyText>
          <View
            style={{
              width: "88%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText rfz={18}>Lista zamówień</MyText>
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                placeholder="Wprowadź datę"
                value={dateOfHistory}
                onChangeText={setDateOfHistory}
                editable={false}
                style={styles.textInput}
                underlineStyle={{ display: "none" }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.shadedText,
            borderRadius: 9,
            overflow: "hidden",
          }}
        ></View>
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            display="default"
            value={time}
            onChange={onChangeTime}
          />
        )}
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="default"
            value={date}
            onChange={onChangeDate}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default OrdersTab;

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
    gap: 8,
  },
  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: Colors.shadedText,
    borderRadius: 10,
    backgroundColor: "#FFF",
    elevation: 0,
    paddingHorizontal: 10,
  },
});
