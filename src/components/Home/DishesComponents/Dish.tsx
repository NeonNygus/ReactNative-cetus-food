import { View, Text, StyleSheet, TextStyle } from "react-native";
import { DishType } from "../Dishes";
import Colors from "../../../../constants/Colors";
import { TouchableOpacity } from "react-native";

import { useOrder } from "../../../store/useOrder";

type DishProps = {
  content: DishType;
};

// type textStylesType = {
//   color: string;
//   weight: string;
//   size: number;
// };

const Dish = ({ content }: DishProps) => {
  const { addOrder } = useOrder();
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <Text style={textStyles(Colors.textGray, "700", 19).text}>
            {content.name}
          </Text>
          <Text style={textStyles(Colors.textGray, "700", 22).text}>
            {new Intl.NumberFormat("pl-PL", {
              style: "currency",
              currency: "PLN",
            }).format(content.price)}
          </Text>
        </View>
        <View style={styles.infoDesc}>
          <Text style={textStyles(Colors.shadedText, null, 12).text}>
            {content.description}
          </Text>
        </View>
        <View style={styles.infoFooter}>
          <Text style={textStyles(Colors.textGray, null, 11).text}>
            Tomek i inni już zamówili
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.orderButton}
              onPress={() => {
                addOrder(content.id);
              }}
            >
              Zamów
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const textStyles = (color: string, weight: string | null, size: number) =>
  StyleSheet.create({
    text: {
      color: color,
      fontWeight: weight,
      fontSize: size,
    },
  });

const styles = StyleSheet.create({
  container: {
    flexDirection: "column-reverse",
    margin: 7,
    width: 300,
    height: 290,
    backgroundColor: "#ddd",
    borderRadius: 11,
    elevation: 4,
    overflow: "hidden",
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
    borderStyle: "solid",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 13,
    position: "absolute",
    bottom: -18,
    right: -27,
  },
});

export default Dish;
