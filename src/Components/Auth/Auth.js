import React, {Component} from 'react';
import axios from 'axios';
import logo from './../../logo.png';
import {loginUser} from '../../redux/reducer';
import { connect } from 'react-redux';

class Auth extends Component {
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
        const {username, password} = this.state;
        axios.post('/api/auth/login', {username, password})
        .then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
            alert('Could not log in')
        })
    }

    register = (e) => {
        const {username, password} = this.state;
        axios.post('/api/auth/register', {username, password})
        .then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err.response.data)
            alert(err.response.data)
        })
    }

    render() {
        const {username, password} = this.state
        return (
            <div className="Auth">
                <div className="auth-container">
                    <img src={logo} alt="logo"/>
                    <h1 className="auth_title">Helo</h1>
                        <div className="auth_input_box">
                            <p className="auth_input_title">Username:</p>
                            <input type="text" name="username" id="username" value={username} onChange={e => this.changeHandler(e)}></input>
                        </div>
                        <div className="auth_input_box">
                            <p className="auth_input_title">Password:</p>
                            <input type="password" name="password" id="password" value={password} onChange={e => this.changeHandler(e)}></input>
                        </div>
                        <div className="auth_button_container">
                            <button className="dark_button" onClick={e => this.login(e)}>Login</button>
                            <button className="dark_button" onClick={e => this.register(e)}>Register</button>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {loginUser})(Auth)