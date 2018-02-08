import { StyleSheet } from 'react-native';
import colors from './colors';

const buttonProps = {
	width : '80%',
	height : 35,
	borderRadius : 5,
	justifyContent : 'center',
	alignItems : 'center',
	marginTop : 5
}

const mainStyles = StyleSheet.create({
	centeredContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	container : {
		flex : 1,
		alignItems : 'center'
	},
	whiteText : {
		color : colors.white
	},
	primaryButton : {
		...buttonProps,
		backgroundColor : colors.primary,
	},
	secondaryButton : {
		...buttonProps,
		backgroundColor : colors.secondary,
	},
	textInput : {
		height : 40,
		borderBottomWidth : 1,
		width : '80%',
		marginBottom : 5,
		borderBottomColor : colors.primary
	}
});

export default mainStyles;
