import unnamed from '../../image/unnamed.png'
import { Link } from 'react-router-dom'
const { Component } = require("react");

export default class AdminCard extends Component {

  state = {

    id: this.props.id,
    email: this.props.email,
    password: this.props.password

  }

  render() {
    let { id, email, deleteAdmin } = this.props;
    return (

      <div>
      <div class="BigCard">
        <div class="plx-card gold ml-5 pl-5 mr-4">
  
          <div class="pxc-avatar"><img src={unnamed} /></div>
          <div class="pxc-stopper ml-5">   </div>
          <div class="pxc-subcard" w-15>
            <div class="pxc-title mb-4">{email}</div>
            
  
            <div class="bottom-row">
              <div class="links">
                
              <Link to={`/dashboard/editAdmin/${id}`} ><button class="btn editbtn text-light mr-2" >Edit</button></Link>
              <button class="btn deletebtn text-light mr-4" onClick={() => deleteAdmin(id)}>Delete</button>
              
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

  }
}



  