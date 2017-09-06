import React, { Component } from 'react';
import { 
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  TextInput,
  Picker,
  ScrollView
} from 'react-native';
import SmartPicker from 'react-native-smart-picker'

class Picker extends Component {
render () {
return (
<ScrollView style={styles.container}>
  <View style={{flex: 1, marginTop: 20}}>
    <ScrollView style={styles.container}>
      <SmartPicker
        selectedValue='CZ'
        label='Set you favorite country'
        onValueChange={() => {this.handleChange}}
      >
        <Picker.Item label='Austria' value='A' />
        <Picker.Item label='Czechia' value='CZ' />
        <Picker.Item label='Germany' value='DE' />
        <Picker.Item label='Poland' value='PL' />
        <Picker.Item label='Slovakia' value='SLO' />
      </SmartPicker>
    </ScrollView>
  </View>
</ScrollView>
);
}
}
