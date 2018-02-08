import React, {Component} from 'react';
import {View, Text,TouchableHighlight} from 'react-native';
import { mainStyles } from '../../theme';
import firebase from 'react-native-firebase';

export default class Settings extends Component {

  componentDidMount(){
    console.log("PROF",firebase.auth().currentUser)
  }

  logout = () => {
    firebase.auth().signOut()
      .then(data => {
        console.log("Data::",data);
      })
      .catch(err => {
        console.log("ERR::",err)
      })
  }

  render() {
    return (
      <View style={mainStyles.container}>
        <TouchableHighlight style={ mainStyles.primaryButton } onPress={ this.logout }>
          <Text style={ mainStyles.whiteText }>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
