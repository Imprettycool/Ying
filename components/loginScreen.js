import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
          <TextInput ref='usernameInput' style={{
            height: 40
          }} placeholder='Username' autoCorrect={false} returnKeyType='next'/>

          <TextInput ref='passwordInput' style={{
            height: 40
          }} placeholder='Password' autoCorrect={false} secureTextEntry={true} returnKeyType='done'/>

          <TouchableOpacity activeOpacity={0.5} onPress={this.props.onLoginPress}>
            <View style={{
              height: 48,
              borderRadius: 24,
              backgroundColor: '#16a085',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#ffffff',
                fontWeight: 'bold'
              }}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation('Register')}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#ffffff',
                fontWeight: 'bold'
              }}>
                Don't have an account?
              </Text>
            </View>
          </TouchableOpacity>
          </View>
        )
    }
}

export default LoginScreen;