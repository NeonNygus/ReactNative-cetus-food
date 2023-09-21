import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

//screens
import Home from "../screens/Home";
import RestaurantPage from "../screens/DrawerScreens/RestaurantPage";
import SingleDishPage from "../screens/DrawerScreens/SingleDishPage";
import OrdererPage from "../screens/DrawerScreens/OrdererPage";
import MyBalancePage from "../screens/DrawerScreens/MyBalancePage";
import MyOrdersPage from "../screens/DrawerScreens/MyOrdersPage";
import HelpPage from "../screens/DrawerScreens/HelpPage";
import MyAccountPage from "../screens/DrawerScreens/MyAccountPage";
import AdminPage from "../screens/DrawerScreens/AdminPage";

//components
import Colors from "../../constants/Colors";
import Clock from "./Clock";

//content
import Data from "../../constants/restaurantsData";
import dishesData from "../../constants/dishesData";
import DishOfTheDayPage from "../screens/DrawerScreens/DishOfTheDayPage";

const Drawer = createDrawerNavigator();

const settingsNavItems = [
  {
    name: "Admin Page",
    label: "Panel admina",
    href: AdminPage,
  },
  {
    name: "Orderer Page",
    label: "Panel zamawiającego",
    href: OrdererPage,
  },
  {
    name: "MyAccount Page",
    label: "Moje konto",
    href: MyAccountPage,
  },
  { name: "MyOrders Page", label: "Moje zamówienia", href: MyOrdersPage },
  { name: "MyBalance Page", label: "Mój bilans", href: MyBalancePage },
  { name: "Help Page", label: "Pomoc", href: HelpPage },
];

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="history"
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView
              {...props}
              contentContainerStyle={{
                height: "100%",
              }}
            >
              <View style={{ height: "10%", flexDirection: "row" }}>
                <View
                  style={{
                    height: "100%",
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="close"
                    size={30}
                    onPress={() => props.navigation.closeDrawer()}
                  />
                </View>
                <View
                  style={{
                    height: "100%",
                    width: "70%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    paddingEnd: 30,
                  }}
                >
                  <Image
                    style={{ width: "60%", resizeMode: "contain" }}
                    source={require("../../assets/img/Drawer/DrawerHeader.png")}
                  />
                </View>
              </View>
              <View style={{ height: "80%" }}>
                <List.Section
                  title="Jedzenie"
                  style={styles.drawerSection}
                  titleStyle={styles.h1}
                >
                  <List.Accordion
                    title="Dostępne restauracje"
                    titleStyle={{
                      fontSize: 13,
                    }}
                    style={styles.text}
                  >
                    <DrawerItemList
                      {...props}
                      items={props.state.routes.filter(
                        (route) => route.name !== "Home"
                      )}
                    />
                  </List.Accordion>
                  <DrawerItem
                    label="Dania dnia"
                    labelStyle={styles.text}
                    onPress={() => {
                      props.navigation.navigate("DishOfTheDay Page");
                    }}
                  />
                </List.Section>
                <List.Section
                  title="Ustawienia"
                  style={styles.drawerSection}
                  titleStyle={styles.h1}
                >
                  {settingsNavItems.map((item, index) => (
                    <DrawerItem
                      key={index}
                      label={item.label}
                      labelStyle={styles.text}
                      onPress={() => {
                        props.navigation.navigate(item.name);
                      }}
                    />
                  ))}
                </List.Section>
              </View>
              <List.Section
                style={{
                  width: "76%",
                  marginLeft: "12%",
                  borderStyle: "dotted",
                  borderTopColor: "#AAA",
                  borderTopWidth: 2,
                }}
              >
                <Clock />
              </List.Section>
            </DrawerContentScrollView>
          );
        }}
        screenOptions={({ navigation }) => ({
          headerTitle: () => (
            <Image
              source={require("../../assets/img/Drawer/DrawerHeader.png")}
              style={{ width: 140, resizeMode: "contain" }}
            />
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Image
                source={require("../../assets/img/Drawer/list.png")}
                style={{
                  marginLeft: 30,
                  width: 40,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Panel główny",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={30}
                color={focused ? "#BB0000" : Colors.textGray}
              />
            ),
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="DishOfTheDay Page"
          component={DishOfTheDayPage}
          options={({ navigation }) => ({
            drawerLabel: "Danie dnia",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={30}
                color={focused ? "#BB0000" : Colors.textGray}
              />
            ),
            drawerItemStyle: { display: "none" },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  source={require("../../assets/img/Drawer/back-arrow.png")}
                  style={{
                    marginLeft: 10,
                    width: 25,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        {settingsNavItems.map((item, index) => (
          <Drawer.Screen
            key={index}
            name={item.name}
            component={item.href}
            options={({ navigation }) => ({
              drawerLabel: item.label,
              drawerIcon: ({ focused }) => (
                <Ionicons
                  name="home"
                  size={30}
                  color={focused ? "#BB0000" : Colors.textGray}
                />
              ),
              drawerItemStyle: { display: "none" },
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={require("../../assets/img/Drawer/back-arrow.png")}
                    style={{
                      marginLeft: 10,
                      width: 25,
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        ))}

        {Data.map((item, index) => (
          <Drawer.Screen
            key={index}
            name={item.name}
            component={RestaurantPage}
            options={({ navigation }) => ({
              title: item.name,
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={require("../../assets/img/Drawer/back-arrow.png")}
                    style={{
                      marginLeft: 10,
                      width: 25,
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
            initialParams={{ content: item }}
          />
        ))}
        {dishesData.map((item, index) => (
          <Drawer.Screen
            key={index}
            name={item.name}
            component={SingleDishPage}
            options={({ navigation }) => ({
              drawerItemStyle: { display: "none" },
              title: item.name,
              headerLeft: (props) => (
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    source={require("../../assets/img/Drawer/back-arrow.png")}
                    style={{
                      marginLeft: 10,
                      width: 25,
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              ),
              headerStyle: {
                elevation: 290,
                shadowColor: "black",
              },
            })}
            initialParams={{ content: item }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  h1: {
    color: Colors.textGray,
    fontWeight: "bold",
  },
  text: {
    color: Colors.textGray,
    fontWeight: "400",
    marginVertical: -7,
  },
  drawerSection: {
    width: "76%",
    marginLeft: "12%",
    borderStyle: "dotted",
    borderBottomColor: "#AAA",
    borderBottomWidth: 2,
  },
});
