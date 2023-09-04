import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useUser } from "../../store/useUser";
import { useAfter } from "../../store/useAfter";
//styles
import Colors from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

//components
import Clock from "./HeaderComponents/Clock";
import OrderEditor from "./HeaderComponents/OrderEditor";

const windowsHeight = Dimensions.get("window").height;

const Header = () => {
  const { user } = useUser();
  const { after } = useAfter();
  return (
    <>
      {user != null && (
        <View style={styles.container}>
          <View>
            <Text style={styles.h1}>Cześć {user.name}!</Text>
            {user.orderer ? (
              <Text style={styles.h2}>
                Pamiętaj, dzisiaj jesteś{" "}
                <Text style={{ color: Colors.primary, fontWeight: "500" }}>
                  ZAMAWIAJĄCYM
                </Text>
              </Text>
            ) : (
              <Text style={styles.h2}>
                Życzymy ci{" "}
                <Text style={{ color: Colors.primary, fontWeight: "500" }}>
                  smaczengo jedzonka :)
                </Text>
              </Text>
            )}
          </View>
          <View style={styles.clock}>
            {after == null ? (
              <Text style={styles.h3}></Text>
            ) : after == true ? (
              <Text style={styles.h3}>Twój czas na zamówienie minął</Text>
            ) : (
              <Text style={styles.h3}>
                Masz jeszcze trochę czasu, aby złożyć zamówienie
              </Text>
            )}
            <Clock />
          </View>
          {/* <OrderEditor /> */}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: "8%",
  },
  h1: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.textGray,
  },
  h2: {
    fontSize: 14,
    color: Colors.textGray,
  },
  h3: {
    fontSize: 12,
    color: Colors.textGray,
  },
  clock: {
    width: "100%",
    alignItems: "center",
    margin: 9,
  },
});

export default Header;
