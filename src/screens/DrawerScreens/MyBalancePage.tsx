import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

//components
import { MyText } from "../../../constants/DefaultElements";

const MonthCard = ({ name, children, orderAmount }) => {
  return (
    <View style={styles.monthCard}>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={[styles.monthCardSection, { width: "80%" }]}>
          <MyText fz={17}>{name}</MyText>

          {children}
        </View>
        <TouchableOpacity
          style={[
            styles.monthCardSection,
            { width: "20%", alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Ionicons name="arrow-forward" size={30}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.monthCardSection}>
        <MyText fz={16}>
          W tym miesiący zamówiłeś{" "}
          <MyText fz={16} fw="600">
            już {orderAmount} razy
          </MyText>
        </MyText>
      </View>
    </View>
  );
};

const MyBalancePage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <MyText fz={20}>Dzisiaj</MyText>
            <MyText fz={38} fw="600" co="primary">
              Wtorek
            </MyText>
            <MyText fz={17} fw="600">
              29 Sierpnia
            </MyText>
          </View>
          <View
            style={{
              borderColor: Colors.primary,
              borderWidth: 3,
              borderRadius: 87,
              alignItems: "center",
              paddingVertical: 35,
              gap: 20,
            }}
          >
            <MyText fz={50} fw="800">
              -130,20 zł
            </MyText>
            <MyText fz={20} style={{ width: "70%", textAlign: "center" }}>
              Stan całkowitego zadłużenia
            </MyText>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: Colors.shadedText,
              width: "95%",
              alignSelf: "center",
            }}
          >
            <MyText
              fz={16}
              co="shaded"
              style={{
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Zadłużenie za zamówienia jedzenia? Spłać je, dbając o porządek
              finansów i ciągłość zamówień. Terminowa spłata to klucz do
              komfortu dla wszystkich.
            </MyText>
          </View>
        </View>
        <MonthCard name="Aktualny miesiąc" orderAmount={10}>
          <MyText fz={27} fw="700" style={{ color: "#FF5C5C" }}>
            {-130.2}
          </MyText>
        </MonthCard>
        <MonthCard name="Poprzenie miesiąc" orderAmount={40}>
          <MyText fz={27} fw="700">
            {0}
          </MyText>
        </MonthCard>
        <View style={styles.card}>
          <View style={{ gap: 16, alignSelf: "center", width: "80%" }}>
            <MyText fw="600">Ostatnie zakupy</MyText>
            <View style={{ gap: 5, width: "100%" }}>
              <MyText fw="600">29.08.2023</MyText>
              <MyText>
                Zupa krem brokułowy + Placki ziemniaczne z gulaszem
              </MyText>
              <MyText>29,00 zł</MyText>
            </View>
            <View style={{ gap: 5, width: "100%" }}>
              <MyText fw="600">29.08.2023</MyText>
              <MyText>
                Zupa krem brokułowy + Placki ziemniaczne z gulaszem
              </MyText>
              <MyText>29,00 zł</MyText>
            </View>
            <View style={{ gap: 5, width: "100%" }}>
              <MyText fw="600">29.08.2023</MyText>
              <MyText>
                Zupa krem brokułowy + Placki ziemniaczne z gulaszem
              </MyText>
              <MyText>29,00 zł</MyText>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require("../../../assets/img/Prowizorka/Frame447.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyBalancePage;

const styles = StyleSheet.create({
  container: {
    padding: 29,
    gap: 30,
  },
  card: {
    borderColor: Colors.shadedText,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    gap: 30,
  },
  monthCard: {
    borderColor: Colors.shadedText,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  monthCardSection: {
    borderColor: Colors.shadedText,
    borderWidth: 1,
    padding: 16,
  },
});
