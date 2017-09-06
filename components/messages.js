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

class Messages extends Component {
  static navigationOptions = {
    title: 'Messages',
  };

render () {
	return (
		<Text>Messages</Text>
	 );
  }  
}

export default Messages;