import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	TextInput
} from 'react-native';
import { mainStyles } from '../../theme';
import firebase from 'react-native-firebase';

export default class SignUp extends Component {

	constructor(){
		super();
		this.state ={
			email : '',
			password : '',
		}
	}

	onSignUp = () => {
		if(this.state.email && this.state.password){
			firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password)
				.then(user => {	})
				.catch(err => {
					console.log("ERR::",err)
				})
		}
	}

	render() {
		return (<View style={mainStyles.centeredContainer}>
			<TextInput
				placeholder='Email'
				keyboardType='email-address'
				value={this.state.email}
				style={mainStyles.textInput}
				onChangeText={e => {
					this.setState({ email: e })
				}}/>
			<TextInput
				placeholder='Password'
				value={this.state.password}
				style={mainStyles.textInput}
				onChangeText={e => {
					this.setState({ password: e })
				}}
				secureTextEntry={ true }
			/>
			<TouchableHighlight
				underlayColor="skyblue"
				style={mainStyles.primaryButton}
				onPress={this.onSignUp}>
				<Text style={ mainStyles.whiteText }>Sign Up</Text>
			</TouchableHighlight>
		</View>);
	}
}
