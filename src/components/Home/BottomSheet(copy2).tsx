import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Colors from "../../../constants/Colors";

import dishesData from "../../../constants/dishesData";

import { useOrder } from "../../store/useOrder";
//components
import Order from "./BottomSheetComponents.tsx/Order";

const BottomSheet = () => {
  const translateY = useSharedValue(40);
  const buttonHeight = useSharedValue(0);
  const context = useSharedValue({ y: 40 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = -event.translationY + context.value.y;
      translateY.value = Math.min(translateY.value, 700);
      translateY.value = Math.max(translateY.value, 40);
    })
    .onEnd(() => {
      translateY.value > 420
        ? ((translateY.value = withSpring(700, {
            damping: 50,
          })),
          (buttonHeight.value = withSpring(60, { damping: 350 })))
        : translateY.value < 420 && translateY.value >= 150
        ? ((translateY.value = withSpring(200, { damping: 50 })),
          (buttonHeight.value = withSpring(60, { damping: 350 })))
        : translateY.value < 150
        ? ((translateY.value = withSpring(0, { damping: 50 })),
          (buttonHeight.value = withSpring(0, { damping: 350 })))
        : null;
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      height: translateY.value,
    };
  });
  const ButtonStyle = useAnimatedStyle(() => {
    return {
      height: buttonHeight.value,
    };
  });
  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle]}>
          {translateY.value <= 200 ? (
            <>
              <View style={{ height: 209 }}>
                <View
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    justifyContent: "center",
                    height: "70%",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: 18,
                    }}
                  >
                    Moje zamówienie
                  </Text>
                  <View
                    style={{
                      height: "40%",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>
                      Kwota mojego zamówienia
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: 18,
                      }}
                    >
                      69zł
                    </Text>
                  </View>
                </View>
              </View>
            </>
          ) : translateY.value <= 700 ? (
            <View>
              <View style={styles.summary}>
                <View style={[styles.textElement, { alignItems: "center" }]}>
                  <Text
                    style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
                  >
                    Twoje zamówienie
                  </Text>
                </View>
                <View
                  style={[
                    styles.textElement,
                    { alignItems: "center", height: "74%" },
                  ]}
                >
                  <ScrollView
                    style={{ width: "110%", marginLeft: "10%" }}
                    contentContainerStyle={{
                      width: "94%",
                    }}
                  ></ScrollView>
                </View>
                <View style={[styles.textElement, { alignItems: "center" }]}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "#fff", fontWeight: "700" }}>
                      Kwota do zapłaty:
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: 18,
                      }}
                    ></Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
        </Animated.View>
      </GestureDetector>

      <Animated.View style={ButtonStyle}>
        {translateY.value <= 200 ? (
          <TouchableOpacity style={[styles.button]}>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
              Zobacz co zamawiam
            </Text>
          </TouchableOpacity>
        ) : translateY.value <= 700 ? (
          <TouchableOpacity style={[styles.button]}>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
              Zamawiam
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.button]}>
            <Text
              style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}
            ></Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.textGray,
    position: "absolute",
    bottom: 0,
  },
  button: {
    backgroundColor: Colors.primary,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
    height: "100%",
  },
  summary: {
    backgroundColor: Colors.textGray,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textElement: {
    width: "78%",
    paddingTop: 23,
    paddingBottom: 23,
    borderBottomWidth: 3,
    borderColor: "#fff",
    borderStyle: "dashed",
  },
  blur: {
    height: "91%",
  },
});
