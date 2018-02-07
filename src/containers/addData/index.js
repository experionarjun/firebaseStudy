import React, {Component} from 'react';
import {View, Text,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import styles from './style';
import firebase from 'react-native-firebase';

export default class AddData extends Component {
  state = {
    uid : null
  }
  componentDidMount(){
    AsyncStorage.getItem('uid').then(result=> {
      console.log("RES::",result)
      this.setState({
        uid : result
      })
    })
  }

  onAdd = ( ) => {
    firebase.database().ref().child(this.state.uid).update({
      transactions : 'hi'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.UID}</Text>
        <TouchableHighlight style={ styles.botButton } onPress={ this.onAdd }>
          <Text style={ styles.whiteText }>ADD</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
