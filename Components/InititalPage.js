import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import Constants from "expo-constants"

class InitialPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {/* <Text>Initital Page</Text> */}
          <Image
              source={require("../Images/schoolBus.png")}
              style={{width: 400, height: 250}}
            />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Sign Up</Text>
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
    backgroundColor: "#95a5a6",

    //   justifyContent: "center",
    //   alignItems: "center",
  },
  top: {
    flex: 2,
    backgroundColor: "#95a5a6",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    
  },
  button: {
    backgroundColor: "#ecf0f1",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    width: 200,
    margin: 5,
    alignItems: "center"
  },
  
});

export default InitialPage;
