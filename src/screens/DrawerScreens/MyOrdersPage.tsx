import { StyleSheet, View, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Input } from "tamagui";
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

const MyOrdersPage = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatepicker();
    }
  };
  return (
    <View style={styles.container} key="1">
      <View>
        <MyText rfz={30} w700>
          Historia moich zamówień
        </MyText>
        <MyText rfz={20}>Poznaj swoją historię posiłków</MyText>
      </View>
      <View>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
          />
        )}
        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
            <Input
              placeholder="Sat Aug 21 2004"
              onPressIn={toggleDatepicker}
              editable={false}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default MyOrdersPage;

const styles = StyleSheet.create({
  container: {
    padding: 29,
  },
});
