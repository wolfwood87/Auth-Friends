import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
class Login extends React.Component {
    state = {
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        }
    }
    
    handleChange = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        })
        setTimeout(() => { console.log("Loading");
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                
                console.log('bk: Login.js: Login: login: res: ', res)
                localStorage.setItem("token", res.data.payload)
                this.setState({
                    ...this.state,
                    isLoading: false
                })
                this.props.history.push('/friends')
            })
            .catch(err => console.log('bk: Login.js: Login: login: catch: err: ', err.message))
         }, 3000);
        
    }
    render() {
        return (
            <>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
                {this.state.isLoading && (
                    <div className="key spinner">
                        <Loader type="TailSpin" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )}
            </>
        )
}
}
export default Login