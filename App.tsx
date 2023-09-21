import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import { useLogin } from "./src/store/useLogin";
import { useOrder } from "./src/store/useOrder";
import { useUser } from "./src/store/useUser";

import { useColorScheme } from "react-native";
import { Text, Stack, TamaguiProvider, Theme, YStack } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";

//screens
import Start from "./src/screens/Start";
import Login from "./src/screens/Login";

//components
import { SafeAreaProvider } from "react-native-safe-area-context";
import Orderer from "./src/screens/Orderer";
import DrawerNavigator from "./src/components/DrawerNavigator";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const { user } = useUser();
  const { logged, logOut } = useLogin();
  const { clearOrders } = useOrder();
  const [start, setStart] = useState(false);
  const [orderer, setOrderer] = useState(false);
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <SafeAreaProvider>
          {start && <Start />}

          {logged && user ? (
            <GestureHandlerRootView style={{ flex: 1 }}>
              {user?.orderer == true && orderer == true && (
                <Orderer setOrderer={setOrderer} />
              )}
              <DrawerNavigator />
            </GestureHandlerRootView>
          ) : (
            <Login />
          )}
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
}
