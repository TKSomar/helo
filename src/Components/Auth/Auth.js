import React, {Component} from 'react';
import axios from 'axios';
import logo from './../../logo.png';

export default class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password})
        .then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            alert('Could not log in')
        })
    }

    register = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        axios.post('/auth/register', {username, password})
        .then( res => {
            this.props.registerUser(res.data)
            alert('Success! Account is now registered.')
        })
        .catch(err => {
            alert('Could not log in')
        })
    }

    render() {
        return (
            <div className="Auth">
                <div className="auth-container">
                    <img src={logo} alt="logo"/>
                    <h1 className="auth_title">Helo</h1>
                        <div className="auth_input_box">
                            <p className="auth_input_title">Username:</p>
                            <input></input>
                        </div>
                        <div className="auth_input_box">
                            <p className="auth_input_title">Password:</p>
                            <input></input>
                        </div>
                        <div className="auth_button_container">
                            <button className="dark_button">Login</button>
                            <button className="dark_button">Register</button>
                        </div>
                </div>
            </div>
        )
    }
}