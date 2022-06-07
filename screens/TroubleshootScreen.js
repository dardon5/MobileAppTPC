import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  image: {
    width: 30,
    height: 100,
    marginRight: 10,
  },
});

const TroubleshootScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Note 1</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/note1.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            {"\n"}
            Each protoboard has Dupont female wires that are labeled at the end
            of them. Red light is “R”, green light is “G” and button is “B”.
          </Text>
        </Card>
        <Card>
          <Card.Title>Note 2</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/note2.png")}
          />
          <Text style={{ marginBottom: 10 }}>
            {"\n"}
            Electrical diagram of control box
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default TroubleshootScreen;
