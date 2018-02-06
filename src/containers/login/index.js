import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import styles from './style';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

	onLogin = () => {
		console.log("onLogin::::");
		this.props.navigation.navigate('Home');
	}

  render() {
    return (<View style={styles.container}>
      <TextInput
				placeholder='Email'
				value={this.state.email}
				style={styles.textInput}
				onChange={e => {
          this.setState({ email: e })
        }}/>
      <TextInput
				placeholder='Password'
				value={this.state.password}
				style={styles.textInput}
				onChange={e => {
          this.setState({ password: e })
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
