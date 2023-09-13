import { View, StyleSheet, Image, Dimensions } from "react-native";
import { DishType } from "../Dishes";
import Colors from "../../../../constants/Colors";
import { TouchableOpacity } from "react-native";
import restaurantsData from "../../../../constants/restaurantsData";
import { useOrder } from "../../../store/useOrder";

import { MyText } from "../../../../constants/DefaultElements";

const windowWidth = Dimensions.get("window").width;

type DishProps = {
  content: DishType;
};

// type textStylesType = {
//   color: string;
//   weight: string;
//   size: number;
// };

const Dish = ({ content, navigateToDish }) => {
  const { addOrder } = useOrder();
  const restaurant = restaurantsData.filter(
    (item) => item.name == content.restaurant
  );
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToDish(content.name)}
    >
      <View style={styles.image}>
        <Image
          source={restaurant[0].menuImage}
          style={{ resizeMode: "repeat", width: "100%" }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <MyText fz={19} fw="700">
            {content.name}
          </MyText>
          <MyText fz={22} fw="700">
            {new Intl.NumberFormat("pl-PL", {
              style: "currency",
              currency: "PLN",
            }).format(content.price)}
          </MyText>
        </View>
        <View style={styles.infoDesc}>
          <MyText fz={12} co="shaded">
            {content.description}
          </MyText>
        </View>
        <View style={styles.infoFooter}>
          <MyText fz={11}>Tomek i inni już zamówili</MyText>
          <TouchableOpacity
            onPress={() => {
              addOrder(content.id);
            }}
          >
            <MyText style={styles.orderButton}>Dodaj</MyText>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // width: 300,
    // height: 290,
    width: (7.7 / 10) * windowWidth,
    height: (7 / 10) * windowWidth,
    borderRadius: 11,
    elevation: 4,
    overflow: "hidden",
    marginVertical: 7,
    marginHorizontal: 5,
  },
  image: {
    height: "55%",
  },
  info: {
    height: "45%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  infoHeader: {
    flexDirection: "row",
    height: "30%",
    width: "88%",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
  },
  infoDesc: {
    height: "45%",
    width: "88%",
    alignSelf: "center",
  },
  infoFooter: {
    width: "88%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  orderButton: {
    color: Colors.primary,
    fontWeight: "600",
    paddingTop: 9,
    paddingLeft: 19,
    paddingBottom: 16,
    paddingRight: 22,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 13,
    position: "absolute",
    bottom: -18,
    right: -27,
  },
});

export default Dish;
