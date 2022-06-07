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

const InstallationScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Step 1</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step1.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Place 3D frame, run Pi power cord through back port and fix board
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 2</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step2.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Place communication module on top of controller
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 3</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step3.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Plug in the reset button and the communication module
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 4</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step4.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Plug in the Red, Green lights and button to the controller
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 5</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step5.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Place actuator in place and plug in the powerline cable to
            communication module
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 6</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step6.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Put Pi in case and place communication module on top
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 7</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step7.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>Connect reset button</Text>
        </Card>
        <Card>
          <Card.Title>Step 8</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step8.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Slide wall plug, MOSFET connection, and Pi power supply through 3D
            print
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 9</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step9.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Slide connection in the housing and place green and red light board
          </Text>
        </Card>
        <Card>
          <Card.Title>Step 10</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require("../assets/step10.jpg")}
          />
          <Text style={{ marginBottom: 10 }}>
            Place Pi in housing and make connections
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default InstallationScreen;
