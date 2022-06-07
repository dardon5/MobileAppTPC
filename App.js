import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import InstallationScreen from "./screens/InstallationScreen";
import TroubleshootScreen from "./screens/TroubleshootScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
        }
        {
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "TPC",
            }}
          />
        }
        {<Stack.Screen name="Contact" component={ContactScreen} />}
        {<Stack.Screen name="Install" component={InstallationScreen} />}
        {<Stack.Screen name="Trouble" component={TroubleshootScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
