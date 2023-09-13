import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

//components
import { MyText } from "../../../constants/DefaultElements";
import OrdersTab from "../../components/AdminPageComponents/OrdersTab";
import RestaurantsTab from "../../components/AdminPageComponents/RestaurantsTab";
import UsersTab from "../../components/AdminPageComponents/UsersTab";
import Colors from "../../../constants/Colors";

const Tab = createMaterialTopTabNavigator();

const AdminPage = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <MyText rfz={32} w700>
            Panel Admina
          </MyText>
          <Tab.Navigator
            initialRouteName="Zamówienia"
            style={{
              height: "100%",
              width: "100%",
            }}
            screenOptions={{
              tabBarActiveTintColor: Colors.primary,
              tabBarInactiveTintColor: Colors.textGray,
              tabBarIndicatorStyle: { display: "none" },
              tabBarStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                width: "94%",
                elevation: 0,
                alignSelf: "center",
              },
              tabBarItemStyle: {
                borderColor: Colors.shadedText,
                borderWidth: 1,
                borderBottomWidth: 0,
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                backgroundColor: "#FFF",
              },
            }}
          >
            <Tab.Screen
              name="Zamówienia"
              component={OrdersTab}
              options={{
                tabBarLabel: () => <MyText rfz={17}>Zamówienia</MyText>,
              }}
            />
            <Tab.Screen
              name="Użytkownicy"
              component={UsersTab}
              options={{
                tabBarLabel: () => <MyText rfz={17}>Użytkownicy</MyText>,
              }}
            />
            <Tab.Screen
              name="Restauracje"
              component={RestaurantsTab}
              options={{
                tabBarLabel: () => <MyText rfz={17}>Restauracje</MyText>,
              }}
            />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 29,
    gap: 20,
    backgroundColor: "#FFF",
    height: 1100,
  },
});
