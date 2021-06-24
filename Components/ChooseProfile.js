import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Constants from "expo-constants";

class ChooseProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.partition}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../Images/parents.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>I am a Parent</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.partition}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../Images/driver.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>I am a Driver</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
  partition: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498db",
    margin: 10,
    borderRadius: 20,
  },
  button: {
    alignItems: "center"
  },
  buttonImage: {
    height: 200,
    width: 200,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  }
});

export default ChooseProfile;