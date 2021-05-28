import './AdminPage.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import AdminCard from '../../components/AdminCard/AdminCard.jsx' 
import {Link} from "react-router-dom"

const { Component } = require("react");

export default class AdminPage extends Component{

    state = {
        admins: [],
        email: "",
        password: "",
        error:false
    }

    async componentDidMount() {
        await this.getAdmins();
         
    }

    getAdmins = async () => {
        try {
          const response = await fetch('//localhost:8000/Admims');
          const result = await response.json();
          if (result.success) {
            const admins = result.result;
            this.setState({ admins });
          } else {
            const error = result.message;
            this.setState({ error });
          }
        } catch (err) {
          this.setState({ error_message: err })
        }
    }

    deleteAdmin = async id => {
        try {
    
          const response = await fetch(`//localhost:8000/Admin/delete/${id}`,{method:"delete"});
          const result = await response.json();
          
    
          if (result.success) {
    
            let stateAdmins = [...this.state.admins].filter(admin => admin.id !== id);
            this.setState({ admins: stateAdmins });
    
          } else this.setState({ error: result.message });
    
        } catch (err) {
          this.setState({ error_message: err })
        }
      }

    render(){
        let {admins} = this.state;
        
        return(<div> 
          <NavAdmin onLogout={this.props.onLogout}/>
            
            <div class="margT">
                <div class="container pb-1" id="container">
                   <h1 class="mb-4" id="AdminTitle">ADMIN LIST</h1>
                   <Link to="/dashboard/addAdmin">
                   <div class="btn btn-outline-primary">
                   Add New Admin
                   </div>
                   </Link>
                    

                    {admins.map(admin => (
                        <AdminCard
                        key={admin.id}
                        id={admin.id}
                        email={admin.email}
                        password={admin.password}
                        deleteAdmin={this.deleteAdmin}
                        />
                    ))}
                    
                    
                    
                 </div>
                 
              </div>
              
        </div>
            
        )}
}