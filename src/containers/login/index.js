import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles from './style';
import firebase from 'react-native-firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      email: '',
      password: '',
      user : null
    }
  }

	onLogin = () => {
    console.log("onLogin::::",this.state);
		// this.props.navigation.navigate('Home');
    if(this.state.email && this.state.password){
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password)
      .then(user => {
        console.log("USER:::",user);
      })
      .catch(err =>{
        console.log("ERR:::",err);
      })
    }
	}

  render() {
    return (<View style={styles.container}>
      <TextInput
				placeholder='Email'
				value={this.state.email}
				style={styles.textInput}
				onChangeText={text => {
          this.setState({ email: text })
        }}/>
      <TextInput
				placeholder='Password'
				value={this.state.password}
				style={styles.textInput}
				onChangeText={text => {
          this.setState({ password: text })
        }}
				secureTextEntry={ true }
			/>
			<TouchableHighlight
				underlayColor="skyblue"
				style={styles.loginButton}
				onPress={this.onLogin}>
				<Text style={ styles.whiteText }>Login</Text>
			</TouchableHighlight>
			<Text>or</Text>
			<TouchableHighlight
				underlayColor="white"
				style={styles.signUpButton}
				onPress={()=>{this.props.navigation.navigate('SignUp')}}>
				<Text>Sign Up</Text>
			</TouchableHighlight>
    </View>);
  }
}
