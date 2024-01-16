import {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div>
                Username:
                <br/>
                <input type="text"/>
                <br/>
                Password:
                <br/>
                <input type="password"/>
                <br/>
                <input type="submit" value="Login"/>
            </div>
        );
    }
}

export default Login;