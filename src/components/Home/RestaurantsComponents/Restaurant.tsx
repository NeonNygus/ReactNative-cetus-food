import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { RestaurantType } from "../Restaurants";

//components
import Rating from "../../Rating";
import { MyText } from "../../../../constants/DefaultElements";

const windowWidth = Dimensions.get("window").width;

type RestaurantProps = {
  content: RestaurantType;
};

// type textStylesType = {
//   color: string;
//   weight: string;
//   size: number;
// };

const Restaurant = ({ content, navigateToRestaurant }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToRestaurant(content.name)}
    >
      <View style={styles.image}>
        <Image
          source={content.image}
          style={{ resizeMode: "repeat", width: "100%" }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <Rating rating={content.rating} />
          <MyText fz={22} fw="700">
            {content.name}
          </MyText>
          {/* <MyText fz={12} co="shaded">
            {content.address}
          </MyText> */}
        </View>
        {/* <View style={styles.infoDesc}>
          <MyText>Zamówienia do godz. {content.ordersHour}</MyText>
          <MyText>
            Ceny: {content.pricesRange[0]} zł - {content.pricesRange[1]} zł
          </MyText>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // width: 316,
    // height: 300,
    width: "100%",
    height: (6 / 10) * windowWidth,
    borderRadius: 11,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    height: "65%",
  },
  info: {
    height: "35%",
    backgroundColor: "#fff",
    padding: 0,
  },
  infoHeader: {
    flexDirection: "column",
    width: "88%",
    height: "90%",
    alignSelf: "center",
    justifyContent: "center",
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
