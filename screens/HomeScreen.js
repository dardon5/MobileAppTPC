import { useNavigation } from "@react-navigation/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component, FlatList, useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
import { auth } from "../firebase";
import ContactScreen from "./ContactScreen";
import TroubleshootScreen from "./TroubleshootScreen";
import InstallationScreen from "./InstallationScreen";

const Tab = createBottomTabNavigator();

const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("Login");
    })
    .catch((error) => alert(error.message));
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#F1F9FF",
        tabBarActiveBackgroundColor: "#0782F9",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color="black" size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="electric-switch"
              color="black"
              size={size}
            />
          ),
        }}
        name="Installation"
        component={InstallationScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="alert-circle-outline"
              color="black"
              size={size}
            />
          ),
        }}
        name="Troubleshoot"
        component={TroubleshootScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="contacts" color="black" size={size} />
          ),
        }}
        name="Contact"
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
}

function NavigationEnabler(props) {
  const navigation = useNavigation();

  return (
    (<HomeScreen {...props} navigation={navigation} />), (<MyTabs></MyTabs>)
  );
}

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Card>
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/tpc.jpeg")}
          />
          <Text style={{ marginBottom: 10 }}>
            {" "}
            {"\n"}
            {"\n"}
            {"\n"}
            The TRANSFORMER PROTECTOR (TP) is the solution to prevent
            transformers from exploding, saving your company’s reputation by
            avoiding unwanted consequences. {"\n"}
            {"\n"}Complying with the definition for Fast Depressurization System
            given by NFPA, the TP can be installed to all transformers from 0.1
            to 1,000 MVA and above. {"\n"}
            {"\n"}It has proven its efficiency by operating at numerous
            occasions.
          </Text>
        </Card>
      </View>
    );
  }
}

export class Home extends Component {
  render() {
    return <NavigationEnabler></NavigationEnabler>;
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
