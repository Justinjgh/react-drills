import React, {Component} from 'react';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
        
        this.doLogin = this.doLogin.bind(this);
    }

    goUserName(name) {
        this.setState({ username: name });
    }

    goPassword(pass) {
        this.setState({ password: pass });
    }

    doLogin() {
            alert('This is a fake page, you silly goose');
    }

   render () {
        return (
            <div className="logindiv">
                <input onChange={e => this.goUserName(e.target.value)} type="UN"/>
                <input onChange={e => this.goUserName(e.target.value)} type ="PW"/>
                <button onClick={this.doLogin}>Login</button>
            </div>
        )
    }
    
}
