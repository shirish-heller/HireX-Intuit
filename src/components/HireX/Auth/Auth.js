import React, { Component } from 'react';
import classes from './Auth.css';
import Modal from '../../UI/Modal/Modal';
import HireXLogo from '../../../staticAssets/hirexlogo_dark.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confpassword: '',
            isLoginPage: true,
            userId: '',
            userPassword: '',
            isEmailValid: true,
            isUserIdValid: true,
            isPasswordValid: true,
            isConfPasswordValid: true,
            isfNameValid: true,
            isUserPasswordValid: true,
            isLoginSignupFailed: false,
            loginErrorMesssage: '',
            isLoginFormValid: false,
            isSignupFormValid: false,
            loginData: {}
      };
    }

    handleConfPasswordChange = (name, e)=> {
        this.validateSignupForm();
        let password = this.state.password;
        let confPassword = e.currentTarget.value;
        this.setState({
            isConfPasswordValid: (!!e.currentTarget.value && password===confPassword),
            [name]: e.currentTarget.value
        }, ()=> this.validateSignupForm());
    }
    handlePassswordChange = (name, e)=> {
        this.setState({
            isPasswordValid: !!e.currentTarget.value,
            [name]: e.currentTarget.value
        }, ()=> this.validateSignupForm());
    }
    handleFnameChange = (name, e)=> {
        this.setState({
            isfNameValid: !!e.currentTarget.value,
            [name]: e.currentTarget.value
        }, ()=> this.validateSignupForm())
    }
    handleEmailChange = (name, e) => {
        if(e.currentTarget && e.currentTarget.validity) {
            this.setState({
                isEmailValid: e.currentTarget.validity.valid,
                [name]: e.currentTarget.value
            }, ()=> this.validateSignupForm())
        }
    };
    handleUserPasswordChange = (name, e) => {
        if(e.currentTarget && e.currentTarget.validity) {
            this.setState({
                isUserPasswordValid: !!e.currentTarget.value,
                [name]: e.currentTarget.value
            }, ()=> this.validateLoginForm())
        }
    };
    handleUserIdChange = (name, e) => {
        if(e.currentTarget && e.currentTarget.validity) {
            this.setState({
                isUserIdValid: e.currentTarget.validity.valid,
                [name]: e.currentTarget.value
            },()=> this.validateLoginForm())
        }
    };
    handleLnameChange = (name, e) => {
        if(e.currentTarget && e.currentTarget.validity) {
            this.setState({
                [name]: e.currentTarget.value
            })
        }
    };

    navigateToSignup = (e)=> {
        this.setState({
            isLoginPage: false,
            userId: '',
            userPassword: '',
            isLoginSignupFailed: false
        });
    }
    validateLoginForm() {
       let {isUserIdValid, isUserPasswordValid} = this.state;
       if(isUserIdValid && isUserPasswordValid) {
           this.setState({isLoginFormValid: true});
        }
    }
    validateSignupForm() {
        let {isPasswordValid, isEmailValid, isConfPasswordValid} = this.state
        if(isPasswordValid && isEmailValid && isConfPasswordValid) {
            this.setState({isSignupFormValid: true})
        }
     }
     signupHandler = ()=> {
        let {isPasswordValid, isEmailValid, isConfPasswordValid, isfNameValid, isSignupFormValid} = this.state
        if(isPasswordValid && isEmailValid && isConfPasswordValid && isfNameValid && isSignupFormValid) {
            // write logic to initiate signup call
            this.initiateSignup();

        } else {
            this.setState({
                isLoginSignupFailed: true
            })
        }
    }
    loginHandler = ()=> {
        let {isUserIdValid, isUserPasswordValid, isLoginFormValid} = this.state
        if(isUserIdValid && isUserPasswordValid && isLoginFormValid) {
            // write logic to initiate login call
            this.initiateLogin()
        } else {
            this.setState({
                isLoginSignupFailed: true,
                loginErrorMesssage: 'Invalid/Incomplete form data entered'
            })
        }
    }

    initiateLogin() {
        let loginUrl = 'http://localhost:5000/auth/login';
        let body = {
            email: this.state.userId,
            password: this.state.userPassword
        }
        fetch(loginUrl, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log('Login Request succeeded with JSON response', data);
            if(data.success) {
                this.setState({
                    isLoginSignupFailed: false,
                    loginData: data
                });
            } else {
                this.setState({
                    isLoginSignupFailed: true,
                    loginErrorMesssage: data.message
                });
            }
        })
        .catch(error=> {
            console.log('Login Request failed', error);
            this.setState({
                isLoginSignupFailed: true,
                loginErrorMesssage: 'Login request failed. Try after some time.'
            });
        })
    }

    initiateSignup = ()=> {
        let signupUrl = 'http://localhost:5000/signup';
        let body = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            username: '',
            password: this.state.password,
            email: this.state.email,
            role: 'buyer'
        }
        fetch(signupUrl, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log('Signup Request succeeded with JSON response', data);
            this.setState({
                isLoginSignupFailed: false
            });
        })
        .catch(error=> {
            console.log('Login Request failed', error);
            this.setState({
                isLoginSignupFailed: true,
                loginErrorMesssage: 'Login request failed. Try after some time.'
            });
        })

    }
    render() {
        return (
            <Modal show={true}>
                <div className={classes.AuthPopupContainer}>
                {/* Header */}
                    <div className={classes.ModalHeader}>
                        <div>
                            <img className={classes.ModalImage} src={HireXLogo} alt="LOGO"/>
                        </div>
                    </div>
                <hr/>

                {/* Login */}

                {this.state.isLoginPage?
                (<div className={classes.Form}>
                    <TextField
                        required
                        error={!this.state.isUserIdValid}
                        id="userId"
                        label="Email Id"
                        className={classes.TextField}
                        onChange={(e)=>this.handleUserIdChange('userId', e)}
                        type="email"
                        name="userId"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        error={!this.state.isUserPasswordValid}
                        onChange={(e)=>this.handleUserPasswordChange('userPassword', e)}
                        id="userPassword"
                        label="Password"
                        className={classes.TextField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                        <Button onClick={this.loginHandler} variant="text" style={{backgroundColor: "#137ded", color: '#fff', fontFamily: 'Raleway', paddingRight: 40, paddingLeft: 40, paddingBottom: 8, paddingTop: 8}}> Login</Button>
                    <div>
                        Not a member? <span className={classes.SignupLink} onClick={(e) => this.navigateToSignup(e)}>Signup</span>
                    </div>

                </div>)
                :         
                (             
                    <form className={classes.Form}>
                    <TextField
                        required
                        error={!this.state.isfNameValid}
                        onChange={(e)=>this.handleFnameChange('fname', e)}
                        id="fname"
                        label="First Name"
                        className={classes.TextField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="lname"
                        label="Last Name"
                        className={classes.TextField}
                        onChange={(e)=>this.handleLnameChange('lname', e)}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        error={!this.state.isEmailValid}
                        onChange={(e)=>this.handleEmailChange('email', e)}
                        id="outlined-email-input"
                        label="Email"
                        className={classes.TextField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        error={!this.state.isPasswordValid}
                        onChange={(e)=>this.handlePassswordChange('password', e)}
                        id="password"
                        label="Password"
                        className={classes.TextField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        error={!this.state.isConfPasswordValid}
                        onChange={(e)=>this.handleConfPasswordChange('confpassword', e)}
                        id="confpassword"
                        label="Confirm Password"
                        className={classes.TextField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                        <Button onClick={this.signupHandler} variant="text" style={{backgroundColor: "#137ded", color: '#fff', fontFamily: 'Raleway', paddingRight: 40, paddingLeft: 40, paddingBottom: 8, paddingTop: 8}}> Signup</Button>
                </form>)
                }
                {this.state.isLoginSignupFailed &&
                    <div className={classes.SignupFailed}>
                    {
                        this.state.isLoginPage? 'Login Failed: Invalid credentials!':'Signup Failed!'
                    } 
                    </div>
                }
                </div>
            </Modal>    
        )
    }
}
export default Auth;