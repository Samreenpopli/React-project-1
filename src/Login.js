import React from 'react';
import InputFloat from 'react-floating-input';
import Background from './Background';

class Login extends React.Component {

    state = {
        email: '',
        password: '',

    };


  

render()
{
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:'25%'}}>
            <InputFloat value={this.state.email} placeholder='Email'
            onChange={({ target }) => this.setState({ email: target.value })} style={{width: 200, marginTop: 30}}/>
            <InputFloat value={this.state.password}  placeholder='Password'
            onChange={({ target }) => this.setState({ password: target.value })} style={{width: 200, marginTop: 60}}/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <button onClick={this.props.OnLoginapiClick}
             style={{ marginTop: 60,width:100}}>
                Login
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
export default Login;