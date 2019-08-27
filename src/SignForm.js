import React from 'react';
import InputFloat from 'react-floating-input';
import FloatingLabel from "floating-label-react";

class SignForm extends React.Component {
    state = {
        
        name: '',
        email: '',
        password: '',
        phoneNo: ''
    }


render()
{
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:'25%'}}>
            <InputFloat value={this.state.name}  placeholder='Name'
            onChange={({ target }) => this.setState({ name: target.value })} style={{width: 200,marginBottom:30, type:'text'}}/>
            <InputFloat value={this.state.email} placeholder='Email'
            onChange={({ target }) => this.setState({ email: target.value })} style={{width: 200, marginTop: 30}}/>
            <InputFloat value={this.state.password} placeholder='Password'
            onChange={({ target }) => this.setState({ password: target.value })} style={{width: 200, marginTop: 60}}/>
            <InputFloat value={this.state.phoneNo} placeholder='Phone No'
            onChange={({ target }) => this.setState({ phoneNo: target.value })} style={{width: 200, marginTop: 60}}/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <button style={{ marginTop: 60,width:100}}>
                Sign Up
            </button>
            <button onClick={this.props.OnBackClick} 
            style={{ marginTop: 60,width:100,marginRight:15}}>
                Back
            </button>
            </div>

        </div>
    );
}
}

export default SignForm;
