import React from 'react';
import SignForm from './SignForm';
import Login from './Login';

class LoginSignUp extends React.Component {

    render()
{
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:'25%'}}>
           <p> Hi Guest!</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <button onClick={this.props.OnLoginClick} 
            style={{ marginTop: 60,width:100,marginRight:15}}>
                Login
            </button>
            <button onClick={this.props.OnSignUpClick}  
            style={{ marginTop: 60,width:100}}>
                Sign Up
            </button>
            </div>

        </div>
    );
}
}

export default LoginSignUp;