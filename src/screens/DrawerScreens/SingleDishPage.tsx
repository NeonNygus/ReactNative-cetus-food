import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import restaurantsData from "../../../constants/restaurantsData";
import Clock from "../../components/Clock";
import Colors from "../../../constants/Colors";

//components
import { MyText } from "../../../constants/DefaultElements";

const SingleDishPage = ({ route }) => {
  const [count, setCount] = useState(0);
  const data = route.params.content;
  const restaurant = restaurantsData.filter(
    (item) => item.name == data.restaurant
  );
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#ADF", height: "40%" }}>
        <Image
          source={restaurant[0].menuImage}
          style={{ resizeMode: "contain", width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ gap: 20, backgroundColor: "#FFF", height: "60%" }}>
        <View
          style={{
            padding: 13,
            alignSelf: "center",
          }}
        >
          <Clock />
        </View>
        <View style={{ paddingHorizontal: 30, gap: 8 }}>
          <MyText fz={32} fw="700" co="primary">
            {data.name}
          </MyText>
          <MyText fw="400" co="shaded">
            {data.description}
          </MyText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyText
              fz={32}
              fw="700"
              style={{
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              {new Intl.NumberFormat("pl-PL", {
                style: "currency",
                currency: "PLN",
              }).format(data.price)}
            </MyText>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => count > 0 && setCount((s) => s - 1)}
                style={{
                  width: "30%",
                  alignItems: "center",
                }}
              >
                <MyText fz={22}>-</MyText>
              </TouchableOpacity>
              <MyText fz={22}>{count}</MyText>
              <TouchableOpacity
                onPress={() => setCount((s) => s + 1)}
                style={{
                  width: "30%",
                  alignItems: "center",
                }}
              >
                <MyText fz={22}>+</MyText>
              </TouchableOpacity>
            </View>
          </View>
          <MyText>
            Zanurz się w wyjątkowym doświadczeniu smaków! Nasze dania to
            harmonia świeżości i kreatywności. Soczyste składniki, perfekcyjnie
            skomponowane smaki i elegancka prezentacja tworzą niezapomniany
            taniec na podniebieniu.
          </MyText>
        </View>
        <View style={{ width: "80%", alignSelf: "center" }}>
          <TouchableOpacity style={styles.button}>
            <MyText co="primary">Dodaj do zamówienia</MyText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingleDishPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counter: {
    height: 40,
    width: 80,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "100%",
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: "center",
  },
});
