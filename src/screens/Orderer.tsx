import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Colors from "../../constants/Colors";

const Orderer = ({ setOrderer }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/img/Orderer.png")}
        style={{ resizeMode: "stretch", width: "100%" }}
      />
      <TouchableOpacity style={styles.button} onPress={() => setOrderer(false)}>
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
          Rozumiem
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Orderer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    top: 30,
    height: 60,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    elevation: 8,
  },
});
