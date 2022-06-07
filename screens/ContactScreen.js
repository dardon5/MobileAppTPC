import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";

const triggerEmail = () => {
  let number = "";
  if (Platform.OS === "ios") {
    number = "telprompt:${2103589900}";
  } else {
    number = "tel:${2103589900}";
  }
  Linking.openURL(number);
};

const triggerCall = () => {
  Linking.canOpenURL(`tel:${this.state.mobileNumber}`).then((supported) => {
    {
      return Linking.openURL(`tel:${this.state.mobileNumber}`);
    }
  });
};

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/callLogo.png")}
        alt="Call-Image"
        style={styles.call}
      ></Image>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={triggerCall}>
            Call us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={triggerEmail}>
            Email us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: "#0782F9",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  call: {
    width: 250,
    height: 250,
  },
});
