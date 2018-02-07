import React, {Component} from 'react';
import {View, Text,TouchableHighlight} from 'react-native';
import styles from './style';
import firebase from 'react-native-firebase';

export default class Settings extends Component {

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
      <View style={styles.container}>
        <TouchableHighlight style={ styles.loginButton } onPress={ this.logout }>
          <Text style={ styles.whiteText }>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
