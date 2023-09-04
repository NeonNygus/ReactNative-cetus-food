import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import Colors from "../../../../constants/Colors";

import { useAfter } from "../../../store/useAfter";

const Clock = () => {
  const orderTime = dayjs().set("hour", 14).set("minute", 0).set("second", 0);
  const [remainingTime, setRemainingTime] = useState(
    orderTime.diff(dayjs(), "second")
  );
  const { after, setAfter } = useAfter();
  useEffect(() => {
    setInterval(() => {
      const newRemainingTime = orderTime.diff(dayjs(), "second");
      setRemainingTime(newRemainingTime);

      if (dayjs().isBefore(orderTime)) {
        setAfter(false);
      } else setAfter(true);
    }, 1000);
  }, []);
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  return (
    <View>
      {after ? null : (
        <Text
          style={{
            margin: 6,
            fontSize: 20,
            color: Colors.primary,
            fontWeight: "500",
          }}
        >
          {hours.toString()}h {minutes.toString().padStart(2, "0")}min{" "}
          {seconds.toString().padStart(2, "0")}s
        </Text>
      )}
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({});
