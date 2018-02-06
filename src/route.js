import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './containers/login';
import SignUp from './containers/signUp';
import Home from './containers/home';

const PublicStack = StackNavigator({
  Login : { screen : Login },
  SignUp : { screen : SignUp }
},{
  initialRouteName : 'Login',
});

const PrivateStack = StackNavigator({
  Home : { screen : Home }
},{
  initialRouteName : 'Home',
  headerMode : 'none'
})

const Router = StackNavigator({
  Public : { screen : PublicStack },
  Private : { screen : PrivateStack }
},{
  initialRouteName : 'Public',
  headerMode : 'none'
})

export default Router;
