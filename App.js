import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabView } from 'react-navigation';

import TabNav from './components/TabNav';
import LoginScreen from './components/loginScreen';


class App extends React.Component {

    state = {
        isLoggedIn: false
      }


    render(){
        if (this.state.isLoggedIn)
         return <TabNav

             />;
     else
         return <LoginScreen
         onLoginPress={() => this.setState({isLoggedIn: true})}
             />;

    }
}

export default App;