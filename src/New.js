import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Button,ImageBackground } from 'react';
import InputFloat from 'react-floating-input';



export default class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			phone: '',
			name: '',
			error: ''
		};
	}

	onSignUpButtonPress() {
        const { email, password, name, phone } = this.state;
        if(email == ''){
			this.setState({
				error: 'Please input email'
			})
		}
		this.setState({ error: '' });
	}

	renderButton() {
		return (
			<Button
				style={{
					backgroundColor: '#ff6800',
					borderRadius: 5,
					width: '95%',
					height: 50,
					alignItems: 'center',
					justifyContent: 'center'
				}}
				onPress={this.onSignUpButtonPress.bind(this)}>
			
				<Text style={{ color: 'white', fontSize: 20 }}>SIGN UP</Text>
			</Button>
		);
	}

	render() {
		return (
			<div  style={{ width: 700, height: "100" }}>

					<div
						style={{
							height: '90%',
							width: '95%',
							marginTop: 25,
							alignItems: 'center',
							backgroundColor: 'white',
							borderRadius: 10,
							marginLeft: 10,
							marginRight: 10
						}}
					>

						/>
						<InputFloat value={this.state.name} placeholder='Name'
            onChange={({ name }) => this.setState({ name })} style={{width: 200,marginBottom:30, type:'text'}}/>

						>

						<FloatingLabel
							labelStyle={styles.labelInput}
							inputStyle={styles.input}
							style={styles.formInput}
							value={this.state.phone}
							onChangeText={phone => this.setState({ phone })}
						>
							phone
						</FloatingLabel>
						<FloatingLabel
							labelStyle={styles.labelInput}
							inputStyle={styles.input}
							style={styles.formInput}
							value={this.state.email}
							onChangeText={email => this.setState({ email })}
						>
							email
						</FloatingLabel>
						<FloatingLabel
							labelStyle={styles.labelInput}
							inputStyle={styles.input}
							style={styles.formInput}
							value={this.state.password}
							secureTextEntry={true}
							onChangeText={password => this.setState({ password })}
						>
							password
						</FloatingLabel>
						<Text style={styles.errorTextStyle}>{this.state.error}</Text>
						{this.renderButton()}
						<div style={{ height: 60 }} />
					</div>

			</div>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	labelInput: {
		color: 'black'
	},
	formInput: {
		borderBottomWidth: 1.5,
		borderColor: '#333',
		width: '95%',
		height: 60
	},
	input: {
		borderWidth: 0,
		marginBottom: -10,
		height: 45
	}
};
