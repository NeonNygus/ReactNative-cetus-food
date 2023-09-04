import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Start = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/img/Start.png")}
        style={{ resizeMode: "contain", height: "100%" }}
      />
    </SafeAreaView>
  );
};
export default Start;
