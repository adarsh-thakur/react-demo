import React, { Component } from 'react'
import { Redirect } from 'react-router';
import '../styles/Home.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        console.log(this.props)
    }
    render() {
        return (
            <div className="wrapper">
                <div className="field-wrapper">
                    <label htmlFor="email">Email Id</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email:e.target.value})}
                    />
                </div>
                <div className="field-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({password:e.target.value})}
                    /></div>
                <div className="field-wrapper">
                    <button type="button" onClick={this.validUserLogin}>Login</button>
                </div>
            </div>
        )
    }
    validUserLogin = () => {
        const email = 'admin@test.com';
        const pass = "Test@1234";
        if (email === this.state.email && pass === this.state.password) {
            console.log('User is valid')
        } else {
            console.log('User is invalid')
        }
        // fetch('URL', {
        //     method: 'POST',
        //     body: {
        //         email:this.state.email,
        //         password:this.state.password,
        //     }
        // }).then(res => res.json())
        //     .then(response => {
        // })
    }
}
