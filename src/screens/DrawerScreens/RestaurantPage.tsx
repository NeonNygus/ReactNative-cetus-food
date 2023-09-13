import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

//components
import { MyText } from "../../../constants/DefaultElements";
import Rating from "../../components/Rating";
import Menu from "../../components/RestaurantPageComponents/Menu";
import BottomSheet from "../../components/BottomSheet";

const RestaurantPage = ({ route, navigation }) => {
  const data = route.params.content;
  function navigateToDish(name) {
    navigation.navigate(name);
  }
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
              <MyText fz={26} fw="700">
                {data.name}
              </MyText>
              <View style={{ marginVertical: 5 }}>
                <Rating rating={data.rating} />
              </View>
              <MyText co="shaded" style={{ lineHeight: 19 }}>
                {data.description}
              </MyText>
            </View>
          </View>
          <View style={{ paddingHorizontal: 29 }}>
            <Menu restaurantName={data.name} navigateToDish={navigateToDish} />
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
