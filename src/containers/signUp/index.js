import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	TextInput
} from 'react-native';
import styles from './style';

export default class SignUp extends Component {

	constructor(){
		super();
		this.state ={
			email : '',
			password : '',
			confirmPass : ''
		}
	}

	onSignUp = () => {
		console.log("SIGNUP::");
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
			<TextInput
				placeholder='Password'
				value={this.state.confirmPass}
				style={styles.textInput}
				onChange={e => {
					this.setState({ confirmPass: e })
				}}
				secureTextEntry={ true }
			/>
			<TouchableHighlight
				underlayColor="skyblue"
				style={styles.loginButton}
				onPress={this.onSignUp}>
				<Text style={ styles.whiteText }>Sign Up</Text>
			</TouchableHighlight>
		</View>);
	}
}
