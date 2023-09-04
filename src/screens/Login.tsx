import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

import { useLogin } from "../store/useLogin";

//constants
import usersData from "../../constants/usersData";
import { useUser } from "../store/useUser";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const windowsHeight = Dimensions.get("screen").height;
const Tab = createMaterialTopTabNavigator();

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { logIn } = useLogin();
  const { authorizeLogin } = useUser();

  const Logowanie = () => {
    return (
      <View
        style={{
          width: "100%",
          // height: 0.5 * windowsHeight,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#e00" }}>{message}</Text>
        <View style={styles.textInputArea}>
          <Text style={{ fontSize: 12 }}>Adres e-mail</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
        </View>
        <View style={styles.textInputArea}>
          <Text style={{ fontSize: 12 }}>Hasło</Text>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
          ></TextInput>
          <Text
            style={{
              fontSize: 12,
              color: Colors.primary,
              fontWeight: "600",
              alignSelf: "flex-end",
            }}
          >
            Zapomniałem hasła
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => authorize()}>
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
            Zaloguj
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Rejestracja = () => {
    return (
      <View
        style={{
          width: "100%",
          // height: 0.5 * windowsHeight,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#e00" }}>{message}</Text>
        <View style={styles.textInputArea}>
          <Text style={{ fontSize: 12 }}>Adres e-mail</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.textInputArea}>
          <Text style={{ fontSize: 12 }}>Nr telefonu</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.textInputArea}>
          <Text style={{ fontSize: 12 }}>Hasło</Text>
          <TextInput secureTextEntry style={styles.textInput}></TextInput>
        </View>
        <View style={styles.textInputArea}>
          <Text style={{ fontSize: 12 }}>Potwierdź hasło</Text>
          <TextInput secureTextEntry style={styles.textInput}></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => authorize()}>
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
            Zaloguj
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  function authorize() {
    for (let item of usersData) {
      if (item.nick === userName) {
        if (item.password === password) {
          logIn();
          authorizeLogin(item.id);
        } else {
          setMessage("Błędne hasło.");
        }
        return;
      }
    }
    setMessage("Nie znaleziono delikwenta.");
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: "33%",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/img/Title.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Logowanie"
            style={{ height: "90%", width: "90%", alignSelf: "center" }}
          >
            <Tab.Screen name="Logowanie" component={Logowanie} />
            <Tab.Screen name="Rejestracja" component={Rejestracja} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    width: "100%",
    height: 40,
    fontWeight: "700",
    fontSize: 18,
    borderColor: "#000",
    borderBottomWidth: 2,
  },
  textInputArea: {
    width: "80%",
    marginBottom: 16,
    marginTop: 16,
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
