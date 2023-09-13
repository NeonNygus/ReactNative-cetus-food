import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

//components
import { MyText } from "../../../constants/DefaultElements";
import DishListElement from "../../components/RestaurantPageComponents/MenuComponents/DishListElement";

import restaurantsData from "../../../constants/restaurantsData";
import dishesData from "../../../constants/dishesData";

const DishOfTheDayPage = ({ navigation }) => {
  function navigateToDish(name) {
    navigation.navigate(name);
  }
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <MyText fz={27} fw="700">
            Dania dnia:
          </MyText>
          <View
            style={{
              gap: 15,
              paddingVertical: 30,
            }}
          >
            {restaurantsData.map((rest, index) => (
              <View key={index}>
                <MyText fz={21} fw="700">
                  {rest.name}:
                </MyText>
                {dishesData.map(
                  (dish, index) =>
                    rest.name == dish.restaurant && (
                      <DishListElement
                        key={index}
                        content={dish}
                        navigateToDish={navigateToDish}
                      />
                    )
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DishOfTheDayPage;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 29, gap: 19, backgroundColor: "#FFF" },
  cart: {
    width: "100%",
    height: 200,
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 9,
    alignItems: "center",
    padding: 12,
    gap: 16,
  },
});
