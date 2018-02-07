import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	TextInput
} from 'react-native';
import styles from './style';
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
				.then(user => {
					console.log("USER:::",user);
					firebase.database().ref().update({
						[user.user._user.uid] : {
							user_data : {
								first_name : '',
								last_name : '',
								address : '',
								phone_number : ''
							},
							transactions : null
						},

					})
				})
				.catch(err => {
					console.log("ERR::",err)
				})
		}
	}

	render() {
		return (<View style={styles.container}>
			<TextInput
				placeholder='Email'
				keyboardType='email-address'
				value={this.state.email}
				style={styles.textInput}
				onChangeText={e => {
					this.setState({ email: e })
				}}/>
			<TextInput
				placeholder='Password'
				value={this.state.password}
				style={styles.textInput}
				onChangeText={e => {
					this.setState({ password: e })
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
