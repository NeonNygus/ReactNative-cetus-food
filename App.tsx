import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { List } from "react-native-paper";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLogin } from "./src/store/useLogin";
import { useOrder } from "./src/store/useOrder";
import { useUser } from "./src/store/useUser";

//screens
import Start from "./src/screens/Start";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import RestaurantPage from "./src/screens/DrawerScreens/RestaurantPage";
import SingleDishPage from "./src/screens/DrawerScreens/SingleDishPage";
import OrdererPage from "./src/screens/DrawerScreens/OrdererPage";
import MyBalancePage from "./src/screens/DrawerScreens/MyBalancePage";
import MyOrdersPage from "./src/screens/DrawerScreens/MyOrdersPage";
import HelpPage from "./src/screens/DrawerScreens/HelpPage";
import MyAccountPage from "./src/screens/DrawerScreens/MyAccountPage";
import AdminPage from "./src/screens/DrawerScreens/AdminPage";

//components
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Orderer from "./src/screens/Orderer";
import Colors from "./constants/Colors";
import Clock from "./src/components/Clock";

//content
import Data from "./constants/restaurantsData";
import dishesData from "./constants/dishesData";
import DishOfTheDayPage from "./src/screens/DrawerScreens/DishOfTheDayPage";

const Drawer = createDrawerNavigator();

const settingsNavItems = [
  {
    label: "Panel Admina",
    href: "Admin Page",
  },
  {
    label: "Panel zamawiającego",
    href: "Orderer Page",
  },
];

export default function App() {
  const { user } = useUser();
  const { logged, logOut } = useLogin();
  const { clearOrders } = useOrder();
  const [start, setStart] = useState(false);
  const [orderer, setOrderer] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  useEffect(() => {
    setInterval(() => {
      setStart(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaProvider>
      {start && <Start />}

      {logged && user ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          {user?.orderer == true && orderer == true && (
            <Orderer setOrderer={setOrderer} />
          )}
          <NavigationContainer>
            <Drawer.Navigator
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
                          source={require("./assets/img/Drawer/DrawerHeader.png")}
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
                        {settingsNavItems.map((item) => (
                          <DrawerItem
                            key={item.href}
                            label={item.label}
                            labelStyle={styles.text}
                            onPress={() => {
                              props.navigation.navigate(item.href);
                            }}
                          />
                        ))}
                        {/* <DrawerItem
                          label="Panel admina"
                          labelStyle={styles.text}
                          onPress={() => {
                            props.navigation.navigate("Admin Page");
                          }}
                        />
                        <DrawerItem
                          label="Panel zamawiającego"
                          labelStyle={styles.text}
                          onPress={() => {
                            props.navigation.navigate("Orderer Page");
                          }}
                        /> */}
                        <DrawerItem
                          label="Moje zamówienia"
                          labelStyle={styles.text}
                          onPress={() => {
                            props.navigation.navigate("MyOrders Page");
                          }}
                        />
                        <DrawerItem
                          label="Moje konto"
                          labelStyle={styles.text}
                          onPress={() => {
                            props.navigation.navigate("MyAccount Page");
                          }}
                        />
                        <DrawerItem
                          label="Mój bilans"
                          labelStyle={styles.text}
                          onPress={() => {
                            props.navigation.navigate("MyBalance Page");
                          }}
                        />
                        {/* <DrawerItem
                          label="Ustawienia"
                          labelStyle={styles.text}
                          onPress={() => {}}
                        /> */}
                        <DrawerItem
                          label="Pomoc"
                          labelStyle={styles.text}
                          onPress={() => {
                            props.navigation.navigate("Help Page");
                          }}
                        />
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
                    source={require("./assets/img/Drawer/DrawerHeader.png")}
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
                      source={require("./assets/img/Drawer/list.png")}
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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
              <Drawer.Screen
                name="Admin Page"
                component={AdminPage}
                options={({ navigation }) => ({
                  drawerLabel: "Panel admin",
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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
              <Drawer.Screen
                name="Orderer Page"
                component={OrdererPage}
                options={({ navigation }) => ({
                  drawerLabel: "Panel zamawiającego",
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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
              <Drawer.Screen
                name="MyAccount Page"
                component={MyAccountPage}
                options={({ navigation }) => ({
                  drawerLabel: "Moje konto",
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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

              <Drawer.Screen
                name="MyOrders Page"
                component={MyOrdersPage}
                options={({ navigation }) => ({
                  drawerLabel: "Mój bilans",
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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
              <Drawer.Screen
                name="MyBalance Page"
                component={MyBalancePage}
                options={({ navigation }) => ({
                  drawerLabel: "Mój bilans",
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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

              <Drawer.Screen
                name="Help Page"
                component={HelpPage}
                options={({ navigation }) => ({
                  drawerLabel: "Pomoc",
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
                        source={require("./assets/img/Drawer/back-arrow.png")}
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
                          source={require("./assets/img/Drawer/back-arrow.png")}
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
                          source={require("./assets/img/Drawer/back-arrow.png")}
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
        </GestureHandlerRootView>
      ) : (
        <Login />
      )}
    </SafeAreaProvider>
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
