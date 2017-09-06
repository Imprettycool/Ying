import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicatorIOS,
  Text,
  View
} from 'react-native';
import Login from './loginScreen';

class RegisterScreen extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      errors: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Register" loaded={this.state.loaded} />
        <View style={styles.body}>

           <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address"}
            />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />
          <Button
            text="Register"
            onpress={this.Register.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />

          <Button
            text="Already have an account?"
            onpress={this.goToLogin.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }
}

export default RegisterScreen;