import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabView } from 'react-navigation';

import Main from './components/Main';
import Messages from './components/messages';
import Settings from './components/settings';
import User from './components/user';

import Login from './components/loginScreen';
import Register from './components/registerScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  CardStack,
  NavigationBar,
} from '@shoutem/ui/navigation';


  const TabNav= TabNavigator({
      Main: {
        screen: Main,
      },
      Messages: {
        screen: Messages,
      },
      Settings: {
        screen: Settings,
      },
      User: {
        screen: User,
      },            
    }, {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
        //Thick teal #094545
        activeTintColor: '#094545',
        showLabel: false,
        activeBackgroundColor: '#094545',
        inactiveTintColor: '#bbb',
        activeTintColor: '#fff',


      }
    });


export default TabNav;