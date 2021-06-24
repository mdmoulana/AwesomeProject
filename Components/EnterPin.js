import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class EnterPin extends Component {
  render() {
    return (
      <View>
        <Text>Verify your phone Number</Text>
        <Text>Enter the 4 digit pin you received</Text>
        <OTPInputView pinCount={6} keyboardType="numeric" editable={true}/>
        {/* <OTPInputView
          style={{width: '80%', height: 200}}
          pinCount={4}
          keyboardType="numeric"
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        /> */}

        {/* <TextInput></TextInput>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <TextInput></TextInput> */}
        <Text>didn't you recieve any pin?</Text>
        <TouchableOpacity>
          <Text>Resend new code</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Change Number</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Verify</Text>
        </TouchableOpacity>
        <ActivityIndicator size={'large'} />
        {/* {Loading} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
   
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
   
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
   
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });

export default EnterPin;
