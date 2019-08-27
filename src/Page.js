import React, {Component} from 'react';
import logo from'./logo.jpg';
import SignForm from './SignForm';
import Login from './Login';
import LoginSignUp from './LoginSignUp';
import Background from './Background';


class Page extends Component {

    constructor(props){
        super(props);
        this.state={
            view: 'loginsignup',
        };
    }

    LoginClick= ()=>{
        this.setState({view:'Login'});
    }
    SignUpClick= ()=>{
        this.setState({view:'SignForm'});
    }
    BackClick= ()=>{
        this.setState({view:'loginsignup'});
    }
    LoginapiClick= ()=>{
        this.setState({view:'background'});
    }

render()
{
    return(
        <div className='flex-container'style={{display:'flex',flexDirection:'row',flexGrow:0,flexShrink:1,width:'100%',justifyContent:'space-between'}}>
            <div 
                style=
                {{backgroundColor:'lightgray',
                height:600, width:700,
                border: '30px solid white'}}
                
            >
              <div>
              < img src={logo} alt='logo' width='630' height='600'/>
              </div>

            </div>
                <div style={{backgroundColor:'lightgray',height:600, width:700,border: '30px solid white'}}>
                {this.state.view=== 'loginsignup' &&<LoginSignUp OnLoginClick={this.LoginClick}  OnSignUpClick={this.SignUpClick}/>}
                {this.state.view==='Login'&&<Login OnLoginapiClick={this.LoginapiClick} OnBackClick={this.BackClick}/>}
                {this.state.view==='SignForm'&&<SignForm OnBackClick={this.BackClick}/>}
                {this.state.view==='background'&&<Background />}
                
                </div>
        </div>
    );
}
  
}

export default Page;