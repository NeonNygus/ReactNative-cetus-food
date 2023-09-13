import { StyleSheet, View, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { MyText } from "../../../constants/DefaultElements";
import PagerView from "react-native-pager-view";

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
    <PagerView style={{ flex: 1, backgroundColor: "#ADF" }} initialPage={0}>
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
              <TextInput
                placeholder="Sat Aug 21 2004"
                editable={false}
                onPressIn={toggleDatepicker}
              />
            </Pressable>
          )}
        </View>
        <View>
          <View>
            <MyText>Dupa</MyText>
          </View>
        </View>
      </View>
      <View key="2" style={{ flex: 1 }}>
        <MyText>Dupa</MyText>
      </View>
    </PagerView>
  );
};

export default MyOrdersPage;

const styles = StyleSheet.create({
  container: {
    padding: 29,
  },
});
