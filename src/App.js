/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { PublicStack,PrivateStack} from './route';
import firebase from 'react-native-firebase';

export default class App extends Component{
  state = {
    loading : true,
    user : null
  }

  componentDidMount(){
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user,
        loading : false
       },()=>{
        console.log("STATE::",this.state)
      });
    });
  }

  componentWillUnmount(){
    this.unsubscriber();
  }

  render(){
    if(this.state.loading) return null;

    return this.state.user ? <PrivateStack/> : <PublicStack/>
  }
}
