import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

class RegEmailAndPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rePassword: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.partition}>
          <Text style={styles.formText}>Email: </Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={(email) => this.setState({email: email})}
          />
          <Text style={styles.formText}>Password: </Text>
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            value={this.state.password}
            onChangeText={(pass) => this.setState({password: pass})}
          />
          <Text style={styles.formText}>Confirm Password: </Text>
          <TextInput
            placeholder="re-Enter password"
            secureTextEntry
            style={styles.input}
            value={this.state.rePassword}
            onChangeText={(pass) => this.setState({rePassword: pass})}
          />

          {/* <TouchableOpacity style={styles.button}>
              <Text>Next</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#3498db",
    justifyContent: "center"
    
  },
  partition: {
    //   alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderRadius: 10,
      margin: 10,
      padding: 20,
      marginBottom: 150,
  },
  formText:{
    height: 40,
    width: 150,
    textAlignVertical: "center",
    // margin: 5,

  },
  input: {
      textAlignVertical: "center",
      height: 40,
      width: 200,
      borderBottomWidth: 2,
    marginHorizontal: 10,
  },
  button: {
      height: 40,
      width: 200,
      borderWidth: 1,
      borderRadius: 20,
      alignItems: "center"
  }
});

export default RegEmailAndPass;
