import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Custombutton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password:''
        }
    }
    handleSubmit= event =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }
    handelChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]: value })
    }
    render(){
        return(
            <div className ='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onsubmit={this.handleSubmit}>
                <FormInput name= 'email' 
                type='email' 
                value={this.state.email}
                label ='Email'
                 required/>
                <FormInput
                name ='password'
                type ='password'
                onChange ={this.handleChange}
                value ={this.state.email} 
                label='password'
                required />
                <Custombutton type ="submit"> Sign in</Custombutton>
                <Custombutton onClick={signInWithGoogle}> {' '} Sign in with Google  </Custombutton>
                </form>
            </div>
        )
    }
}

export default SignIn;