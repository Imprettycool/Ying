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

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

render () {
	return (
		<Text>Settings</Text>
	 );
  }
}

export default Settings;