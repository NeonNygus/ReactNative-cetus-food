import { View, StyleSheet } from "react-native";
import { useUser } from "../../store/useUser";
import { useAfter } from "../../store/useAfter";
import { Stack, Text, SizableText, XStack, YStack } from "tamagui";

//components
import Clock from "../Clock";
import OrderEditor from "./HeaderComponents/OrderEditor";
import { MyText } from "../../../constants/DefaultElements";

const Header = () => {
  const { user } = useUser();
  const { after } = useAfter();
  return (
    <>
      {user != null && (
        <View style={styles.container}>
          <View>
            <MyText fz={30} fw="700">
              Cześć {user.name}!
            </MyText>
            {user.orderer ? (
              <MyText fz={14}>
                Pamiętaj, dzisiaj jesteś{" "}
                <MyText fz={14} fw="500" co="primary">
                  ZAMAWIAJĄCYM
                </MyText>
              </MyText>
            ) : (
              <MyText fz={14}>
                Życzymy ci{" "}
                <MyText fz={14} fw="500" co="primary">
                  smaczengo jedzonka :)
                </MyText>
              </MyText>
            )}
          </View>
          <View style={styles.clock}>
            {after == null ? null : after == true ? (
              <MyText fz={12}>Twój czas na zamówienie minął</MyText>
            ) : (
              <MyText fz={12}>
                Masz jeszcze trochę czasu, aby złożyć zamówienie
              </MyText>
            )}
            <Clock />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  clock: {
    width: "100%",
    alignItems: "center",
    margin: 9,
  },
});

export default Header;
