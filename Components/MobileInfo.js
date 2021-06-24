import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
// import Constants from "expo-constants";


class MobileInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header View */}
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Mobile Number</Text>
        </View> */}

        {/* {Enter number View} */}
        <View style={styles.enterNumber}>
            <View>
                <Text>Confirm with your phone Number</Text>
            </View>
          <View style={styles.viewRow}>
          <Text>+94</Text>
          <TextInput style={styles.input} placeholder={"123456789"}></TextInput>
          </View>
          <Text>we'll send a one time password to Confirm</Text>
          <Button title={"Send OTP"} onPress={() => this.props.navigation.navigate("Enter Pin")} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
  // header: {
  //   backgroundColor: "blue",
  //   flex: 1,
  //   paddingTop: Constants.statusBarHeight,
  //   paddingLeft: 10,
  // },
  // headerText: {
  //   fontWeight: "bold",
  //   textDecorationLine: "underline",
  //   fontSize: 28,
  //   fontStyle: "italic",
  // },
  enterNumber: {
    flex: 4,
    backgroundColor: "green",
  },
  enterPinCode: {
    flex: 5,
    backgroundColor: "yellow",
    alignItems: "center",
  },
  viewRow:{
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    minWidth: 200,
    textAlign: "center",
  },
  // button: {
  //   alignItems: "center",
  // },
  // buttonImage: {
  //   height: 100,
  //   width: 100,
  //   borderRadius: 10,
  // },
  // buttonText: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  // },
});

export default MobileInfo;
