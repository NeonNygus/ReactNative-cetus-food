import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  Image,
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
  const { orders } = useOrder();

  const [modalShown, setModalShown] = useState<boolean>(false);
  const [modalUnfolded, setModalUnfolded] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const heights = {
    unshown: 0,
    shown: 200,
    unfolded: 700,
  };
  const translateY = useSharedValue(heights.unshown);
  const buttonHeight = useSharedValue(0);
  const context = useSharedValue({ y: heights.unshown });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = -event.translationY + context.value.y;
      translateY.value = Math.min(translateY.value, heights.unfolded);
      translateY.value = Math.max(translateY.value, 0);
    })
    .onEnd(() => {
      translateY.value > 420
        ? (runOnJS(setModalUnfolded)(true),
          (translateY.value = withSpring(heights.unfolded, {
            damping: 50,
          })),
          (buttonHeight.value = withSpring(60, { damping: 350 })))
        : translateY.value < 420 && translateY.value >= 150
        ? (runOnJS(setModalUnfolded)(false),
          (translateY.value = withSpring(heights.shown, { damping: 50 })),
          (buttonHeight.value = withSpring(60, { damping: 350 })))
        : translateY.value < 150
        ? (runOnJS(setModalShown)(false),
          (translateY.value = withSpring(heights.unshown, { damping: 50 })),
          (buttonHeight.value = withSpring(0, { damping: 350 })))
        : null;
    });

  useEffect(() => {
    orders.length > 0
      ? setModalShown(true)
      : (setModalShown(false), setModalUnfolded(false));
  }, [orders]);
  useEffect(() => {
    modalShown && !modalUnfolded
      ? ((translateY.value = withSpring(heights.shown, { damping: 50 })),
        (buttonHeight.value = withSpring(60, { damping: 350 })))
      : modalShown && modalUnfolded
      ? ((translateY.value = withSpring(heights.unfolded, {
          damping: 50,
        })),
        (buttonHeight.value = withSpring(60, { damping: 350 })))
      : ((translateY.value = withSpring(heights.unshown, { damping: 50 })),
        (buttonHeight.value = withSpring(0, { damping: 350 })));
  }, [modalShown, modalUnfolded]);
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
      height: buttonHeight.value,
    };
  });
  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle]}>
          <View
            style={{
              height: 19,
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                width: "100%",
                margin: 0,
              }}
              source={require("../../../assets/img/Home/BottomSheet/Frame.png")}
            />
          </View>
          <View style={{ backgroundColor: Colors.textGray, height: "100%" }}>
            {modalShown && !modalUnfolded ? (
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
            ) : modalShown && modalUnfolded ? (
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
                      { alignItems: "center", height: "70%" },
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
          </View>
        </Animated.View>
      </GestureDetector>

      <Animated.View style={ButtonStyle}>
        {modalShown && !modalUnfolded ? (
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => setModalUnfolded(true)}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
              Zobacz co zamawiam
            </Text>
          </TouchableOpacity>
        ) : modalShown && modalUnfolded ? (
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
