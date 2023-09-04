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

//components
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Orderer from "./src/screens/Orderer";
import Colors from "./constants/Colors";
import Clock from "./src/components/Home/HeaderComponents/Clock";

//content
import Data from "./constants/restaurantsData";

const Drawer = createDrawerNavigator();

export default function App(props) {
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

      {logged ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          {user.orderer == true && orderer == true && (
            <Orderer setOrderer={setOrderer} />
          )}
          <NavigationContainer>
            {/* 
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
                        <Ionicons name="person" size={30} />
                      </View>
                      <View
                        style={{
                          height: "100%",
                          width: "70%",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: 23 }}>{user?.name}</Text>
                      </View>
                    </View>
                    <DrawerItemList {...props} />
                    <DrawerItem
                      label="Wyloguj się"
                      icon={() => (
                        <Ionicons
                          name="log-out"
                          size={30}
                          color={Colors.textGray}
                        />
                      )}
                      onPress={() => (logOut(), clearOrders())}
                    />
                  </DrawerContentScrollView>
                );
              }}
              screenOptions={{
                headerRight: () => (
                  <TouchableOpacity>
                    <Image
                      source={require("./assets/img/Home/shopping-cart.png")}
                      style={{
                        marginRight: 20,
                        width: 30,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Image
                    source={require("./assets/img/Home/DrawerHeader.png")}
                    style={{ width: 140, resizeMode: "contain" }}
                  />
                ),
                headerTitleAlign: "center",
                // headerLeft: () => (
                //   <Image
                //     source={require("./assets/img/Home/list.png")}
                //     style={{
                //       marginLeft: 30,
                //       width: 40,
                //       resizeMode: "contain",
                //     }}
                //   />
                // ),
              }}
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
                }}
              />
              <Drawer.Screen
                name="Orders"
                component={Orders}
                options={{
                  drawerLabel: "Twoje zamówienia",
                  drawerIcon: ({ focused }) => (
                    <Ionicons
                      name="basket"
                      size={30}
                      color={focused ? "#BB0000" : Colors.textGray}
                    />
                  ),
                  headerRight: undefined,
                }}
              />
            </Drawer.Navigator> 
            */}
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
                          source={require("./assets/img/Home/DrawerHeader.png")}
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
                            marginLeft: -15,
                          }}
                          style={styles.text}
                          left={(props) => <List.Icon {...props} />}
                        >
                          <DrawerItemList {...props} />
                        </List.Accordion>
                        <List.Accordion
                          title="Dania dnia"
                          titleStyle={{
                            fontSize: 13,
                            marginLeft: -15,
                          }}
                          style={styles.text}
                          left={(props) => <List.Icon {...props} />}
                        >
                          <DrawerItem
                            label="Majeranek"
                            onPress={() =>
                              props.navigation.navigate("Restaurant")
                            }
                          />
                        </List.Accordion>
                      </List.Section>
                      <List.Section
                        title="Ustawienia"
                        style={styles.drawerSection}
                        titleStyle={styles.h1}
                      >
                        <DrawerItem
                          label="Panel zamawiającego"
                          labelStyle={styles.text}
                          onPress={() => {}}
                        />
                        <DrawerItem
                          label="Moje zamówienia"
                          labelStyle={styles.text}
                          onPress={() => {}}
                        />
                        <DrawerItem
                          label="Moje konto"
                          labelStyle={styles.text}
                          onPress={() => {}}
                        />
                        <DrawerItem
                          label="Mój bilans"
                          labelStyle={styles.text}
                          onPress={() => {}}
                        />
                        <DrawerItem
                          label="Ustawienia"
                          labelStyle={styles.text}
                          onPress={() => {}}
                        />
                        <DrawerItem
                          label="Pomocy!"
                          labelStyle={styles.text}
                          onPress={() => {}}
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
              screenOptions={{
                headerRight: () => (
                  <TouchableOpacity>
                    <Image
                      source={require("./assets/img/Home/shopping-cart.png")}
                      style={{
                        marginRight: 20,
                        width: 30,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <Image
                    source={require("./assets/img/Home/DrawerHeader.png")}
                    style={{ width: 140, resizeMode: "contain" }}
                  />
                ),
                headerTitleAlign: "center",
                // headerLeft: () => (
                //   <TouchableOpacity
                //     onPress={() => {
                //       props.navigation.openDrawer();
                //     }}
                //   >
                //     <Image
                //       source={require("./assets/img/Home/list.png")}
                //       style={{
                //         marginLeft: 30,
                //         width: 40,
                //         resizeMode: "contain",
                //       }}
                //     />
                //   </TouchableOpacity>
                // ),
              }}
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
                }}
              />
              {Data.map((item, index) => (
                <Drawer.Screen
                  key={index}
                  name={item.name}
                  component={RestaurantPage}
                  options={({ navigation }) => ({
                    title: item.name,
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={35} />
                      </TouchableOpacity>
                    ),
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
