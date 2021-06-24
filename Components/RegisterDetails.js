import { Picker } from "@react-native-picker/picker";
import React, { Component, useState } from "react";
import {
    ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RegEmailAndPass from "./RegEmailAndPass";

class RegisterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      title: "",
      addNo: '',
      add1: '',
      add2: '',
      city: '',
      mobile: '',
    };
  }
  // const [selectTitle, setSelectedTitle] = useState();

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.upPartition}>
          <View style={styles.inputView}>
            {/* <Text style={styles.formText}>First Name: </Text> */}
            <TextInput style={styles.inputText} placeholder="First name" />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.formText}>Last Name: </Text>
            <TextInput style={styles.input} placeholder="Last name" />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.formText}>Title: </Text>
            <Picker
              selectedValue={this.state.title}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ title: itemValue })
              }
              style={{ width: 100, height: 40 }}
            >
              <Picker.Item label="Mr" value="mr" />
              <Picker.Item label="Mrs" value="mrs" />
              <Picker.Item label="Miss" value="miss" />
            </Picker>
          </View>
        </View>
        <View style={styles.addressPartition}>
          <Text style={styles.formText}>Address and Details</Text>
          <View style={styles.viewRow}>
            <Text style={styles.formText}>Address No: </Text>
            <TextInput style={styles.input} placeholder="190/1/1" />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.formText}>Address 1: </Text>
            <TextInput style={styles.input} placeholder="street" />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.formText}>Address 2: </Text>
            <TextInput style={styles.input} placeholder="town" />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.formText}>City: </Text>
            <TextInput style={styles.input} placeholder="district" />
          </View>
          {/* <View style={styles.viewRow}>
            <Text style={styles.formText}>Mobile: </Text>
            <TextInput
              style={styles.input}
              placeholder="07--------"
              keyboardType="numeric"
            />
          </View> */}
        </View>
        <RegEmailAndPass />
        <TouchableOpacity style={styles.button}>
          <Text>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    // justifyContent: "center",
    // alignItems: "center",
  },
  viewRow: {
    flexDirection: "row",
  },
  upPartition: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 20,
    alignItems: "center"
  },
  addressPartition: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  formText: {
    height: 40,
    width: 100,
    margin: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    // fontSize: 12,s
  },
  input: {
    height: 40,
    width: 200,
    // borderBottomWidth: 2,
    borderColor: "gray",
    marginHorizontal: 10,
    padding: 10,
  },
  picker: {
    width: 100,
    height: 40,
    marginHorizontal: 10,
    padding: 10,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterDetails;
