import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { TouchableHighlight } from "react-native-gesture-handler";
import TouchableNativeFeedback from "react-native-gesture-handler/lib/typescript/components/touchables/TouchableNativeFeedback.android";
import { SafeAreaView } from "react-native-safe-area-context";

//components
import Rating from "../../components/Rating";
import Menu from "../../components/Home/RestaurantPageComponents/Menu";
import BottomSheet from "../../components/Home/BottomSheet";

//content
import dishesData from "../../../constants/dishesData";

const RestaurantPage = ({ route }: any) => {
  const data = route.params.content;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={{
                width: "100%",
                height: 180,
                resizeMode: "cover",
              }}
              source={data.image}
            />
            <View style={{ padding: 29 }}>
              <Text style={styles.h1}>{data.name}</Text>
              <View style={{ marginVertical: 5 }}>
                <Rating rating={data.rating} />
              </View>
              <Text style={{ lineHeight: 19, color: Colors.shadedText }}>
                {data.description}
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 29 }}>
            <Menu restaurantName={data.name} />
          </View>
        </View>
      </ScrollView>
      <BottomSheet />
    </>
  );
};

export default RestaurantPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    justifyContent: "flex-start",
  },
  h1: {
    color: Colors.textGray,
    fontWeight: "700",
    fontSize: 26,
  },
});
