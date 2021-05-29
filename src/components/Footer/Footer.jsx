import './Footer.css';
//import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import phoenics from '../../image/phoenics.jpeg'

import {
  
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const { Component } = require("react");
export default class Footer extends Component {

  state = {
        
    email: ""
}

createSub = async (params = {}) => {
    let { email} = params;
    let url = `https://bloggers-appp.herokuapp.com/subscribers/create`;
    let paramsErr = "you need at least email properties to update a sub";
    if (!email) throw new Error(paramsErr);
    try{
        await fetch(url,{
            method:"post",
            body: JSON.stringify({email}),
            headers: { 'Content-Type': 'application/json' },
        });
    }catch(err){
         this.setState({ error_message: err })
     }
    
}
handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
}

handleSubmit = (event) => {
    event.nativeEvent.preventDefault();
    let { email } = this.state;
    this.createSub({ email });
    this.setState({email:""})
  
}

  render() {
    let {email} = this.state;
    return (<>
      <div className="main-footer">
        <div className="container">
          

          <div className="second-part">
            <div class="columnnn">
              {/* <img src={phoenics} class="LogoImage" height="80px" width="100px" /> */}
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="rowbuttons">
                {/* Column1 */}
                
                <div className="col1">
                  <input
                    required
                    value={email}
                    onChange={this.handleChange}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="inputemail"
                  />
                </div>
                {/*  column 2*/}
                <div className="col2">
                  <button className="btnsub" type="submit">Subscribe</button>
      
                </div>
              </div>
            </form>
          </div>
        </div>
        <center>  <div class="social-container">
          <h3>Social Follow</h3>
          <a href="https://www.facebook.com/learnbuildteach/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com/jamesqquick" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram. com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        </center>

        
        <div className="rowz">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Blogging Website | All rights reserved |
           Terms Of Service | Privacy
           </p>
          </div>
          </div> 
</>
        
      
    );
  }
}
