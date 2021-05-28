import './HomeDiv.css';

const { Component } = require("react");
export default class HomeDiv extends Component {

  render() {
    return (
     
      <div className="content">
         
            <div className="title">
              <h2 class="title_text"><mark class="markT">Welcome Blogging website</mark></h2>
            </div>
              
            <div className="message">
              <h4><mark class="markT">Read and share new perspectives on just about any topic. Everyone’s welcome</mark></h4>
            </div>
          
          </div>
    )
  }
}
