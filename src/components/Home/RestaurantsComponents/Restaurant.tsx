import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../../../constants/Colors";
import { RestaurantType } from "../Restaurants";

type RestaurantProps = {
  content: RestaurantType;
};

// type textStylesType = {
//   color: string;
//   weight: string;
//   size: number;
// };

const Restaurant = ({ content }: RestaurantProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={content.image}
          style={{ resizeMode: "repeat", width: "100%" }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <Text>{content.rating}/5</Text>
          <Text style={textStyles(Colors.textGray, "700", 19).text}>
            {content.name}
          </Text>
          <Text style={textStyles(Colors.shadedText, null, 12).text}>
            {content.address}
          </Text>
        </View>
        <View style={styles.infoDesc}>
          <Text style={textStyles(Colors.textGray, null, 14).text}>
            Zamówienia do godz. {content.ordersHour}
          </Text>
          <Text style={textStyles(Colors.textGray, null, 14).text}>
            Ceny: {content.pricesRange[0]} zł - {content.pricesRange[1]} zł
          </Text>
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
    flexDirection: "column",
    margin: 7,
    width: 316,
    height: 300,
    backgroundColor: "#ddd",
    borderRadius: 11,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    height: "50%",
  },
  info: {
    height: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  infoHeader: {
    flexDirection: "column",
    height: "38%",
    width: "88%",
    alignSelf: "center",
  },
  infoDesc: {
    height: "45%",
    width: "88%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Restaurant;
