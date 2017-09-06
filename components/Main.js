import React, { Component } from 'react';
import { 
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  TextInput,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DropDownMenu, Divider, Typography, Screen } from '@shoutem/ui';
import {
  NavigationBar,
} from '@shoutem/ui/navigation';

class Main extends Component {

render () {
	return (

    <View style={styles.container}>
      <NavigationBar
        title="Home"
        rightComponent={<DropDownMenu
        options={[
          { name: 'All', value: 1 },
          { name: 'Transportation', value: 1 },
          { name: 'World', value: 1 },
          { name: 'Lifestyle', value: 1 },
          { name: 'Food', value: 1 },
          { name: 'Music', value: 1 },
          { name: 'Movies', value: 1 },
          { name: 'Tech', value: 1 },
          { name: 'Fun', value: 1 },
          { name: 'Fashion', value: 1 },
        ]}
      titleProperty="name"
      valueProperty="value"
      />}
    />


		<TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder = "What's Up?"
      style={styles.input}
      returnKeyType = {"next"} 
      autoFocus = {true} 
      />

    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Where To?"
      style={styles.input}
      returnKeyType = {"done"} 
    />
    <Divider styleName="line" /> 
    
    </View>
	 );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignItems:'center'
  },

})

export default Main;