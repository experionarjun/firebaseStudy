import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from './containers/login';
import SignUp from './containers/signUp';

import Home from './containers/home';
import AddData from './containers/addData';
import Settings from './containers/settings';

const PublicStack = StackNavigator({
  Login : { screen : Login },
  SignUp : { screen : SignUp }
},{
  initialRouteName : 'Login',
});

const PrivateStack = TabNavigator({
  Home : { screen : Home },
  AddData : { screen : AddData },
  Settings : { screen : Settings }
},{
  initialRouteName : 'Home',
  headerMode : 'none'
})

// const Router = StackNavigator({
//   Public : { screen : PublicStack },
//   Private : { screen : PrivateStack }
// },{
//   initialRouteName : 'Public',
//   headerMode : 'none'
// })

export { PublicStack,PrivateStack };
