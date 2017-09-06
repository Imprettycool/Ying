import React, { Component } from 'react';
import { 
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { TabNavigator } from 'react-navigation'

class User extends Component {
  static navigationOptions = {
    title: 'Me',
  };

render () {
	return (
		<Text>My profile</Text>
	 );
  }  
}

export default User;