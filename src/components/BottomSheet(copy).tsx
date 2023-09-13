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
import Order from "./BottomSheetComponents/Order";

type modalHeight = 0 | 200 | 700;
type buttonHeight = 0 | 60;

const BottomSheet = () => {
  const { orders } = useOrder();

  const [modalHeight, setModalHeight] = useState<modalHeight>(0);
  const [buttonHeight, setButtonHeight] = useState<buttonHeight>(0);
  const [price, setPrice] = useState<number>(0);

  const translateY = useSharedValue(0);
  const buttonY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = -event.translationY + context.value.y;
      translateY.value = Math.min(translateY.value, 700);
      translateY.value = Math.max(translateY.value, 0);
    })
    .onEnd(() => {
      runOnJS(setHeight)(
        translateY.value > 420
          ? 700
          : translateY.value <= 420 && translateY.value >= 150
          ? 200
          : 0
      );
    });

  function setHeight(height) {
    setModalHeight(height);
    translateY.value = withSpring(height, {
      damping: 50,
    });
    setButtonHeight(height == 700 ? 60 : height == 200 ? 60 : 0);
    buttonY.value = withSpring(buttonHeight, { damping: 350 });
  }
  useEffect(() => {
    orders.length == 0 && setHeight(0);
    orders.length > 0 && modalHeight == 0 && setHeight(200);
  }, [orders]);
  useEffect(() => {
    setPrice(0),
      orders.map((item) =>
        setPrice((price) => price + dishesData[item.dishId - 1].price)
      );
  }, [orders]);
  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      height: translateY.value,
    };
  });
  const ButtonStyle = useAnimatedStyle(() => {
    return {
      height: buttonY.value,
    };
  });
  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle]}>
          {modalHeight == 200 ? (
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
                      {price}zł
                    </Text>
                  </View>
                </View>
              </View>
            </>
          ) : modalHeight == 700 ? (
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
                  >
                    <View style={{ width: "93%" }}>
                      {orders != null ? (
                        orders.map((item) => (
                          <Order
                            key={item.orderId}
                            orderId={item.orderId}
                            content={dishesData[item.dishId - 1]}
                          />
                        ))
                      ) : (
                        <Text>null</Text>
                      )}
                    </View>
                  </ScrollView>
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
                    >
                      {price}zł
                    </Text>
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
        {modalHeight == 200 ? (
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => setHeight(700)}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
              Zobacz co zamawiam
            </Text>
          </TouchableOpacity>
        ) : modalHeight == 700 ? (
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
