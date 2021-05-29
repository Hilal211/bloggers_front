import { Component } from 'react';
import { toast } from 'react-toastify';
import { setCookie, removeCookie } from '../../cookie';
import KeyLogo from '../../image/KeyLogo.jpg';
import './LoginPage.css'
export default class Login extends Component {

    state = {
        id: null,
        token: null,
        name: "",
        nickname: "",
        password: "",
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let { name, password } = this.state;
        if (!name || !password) {
            return toast.error("all fields are required");
        }
        this.login()
    }

    login = async () => {
        const { name, password } = this.state;
        try {
            const url = 'https://bloggers-appp.herokuapp.com/login';
            const body = JSON.stringify({ name, password });
            const headers = { 'Content-Type': 'application/json' };

            const response = await fetch(url, { method: "POST", headers, body });
            const answer = await response.json();
            if (answer.success) {
                // answer.result: id, token, name, nickname
                this.props.onLogin(answer.result);
                toast(`successful login`);
                // now set the cookie
                setCookie('id', answer.result.id, 30);
                setCookie('token', answer.result.token, 30);
            } else {
                this.setState({ error_message: answer.message });
                toast.error(answer.message);
            }
        } catch (err) {
            this.setState({ error_message: err.message });
            toast.error(err.message);
        }
    };

    render() {
        let { name, password } = this.state;
        return (
            <div class="container">
                
            <div class="row loginposition">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8 login-box">
                    {/* <div class="col-lg-12 login-key"> */}
                        {/* <i class="fa fa-key" aria-hidden="true"></i> */}
                        {/* <box-icon color="outline-secondary" name="key" color="#18CFC3" size="lg" class="mr-2" Id="loginkey" ></box-icon> */}
                    {/* </div> */}
                    <img src={KeyLogo} class="KeyLogo mt-2" />
                    <div class="col-lg-12 login-title">
                        ADMIN PANEL
                    </div>
    
                    <div class="col-lg-12 login-form">
                        <div class="col-lg-12 login-form">
                            <form className="third" onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                   <div> <label class="form-control-label">USERNAME</label></div>
                                    <input required name="name" type="text" class="admininput"
                                         value={name} onChange={this.handleChange}autoComplete="new-password"></input>
                                </div>
                                <div class="form-group">
                                 <div>  <label class="form-control-label">PASSWORD</label></div>
                                    <input required name="password" type="password"
                                        value={password} onChange={this.handleChange}autoComplete="new-password"></input>
                                </div>
    
                                <div class="col-lg-12 loginbttm">
                                    <div class="col-lg-6 login-btm login-text">
                                        
                                    </div>
                                    <div class="col-lg-6 login-btm login-button">
                                        <button type="submit" value="login" class="btn btn-outline-primary">LOGIN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>    
              
        
        // <div>
            
        //     <form className="third" onSubmit={this.handleSubmit}>
        //         <input
        //             required name="name" placeholder="name" type="text"
        //             value={name} onChange={this.handleChange}
        //         />
        //         <input
        //             required name="password" placeholder="password" type="password"
        //             value={password} onChange={this.handleChange}
        //         />
        //         <input type="submit" value="login" />
        //     </form>
        //     </div>
        )
    }

}