import './EditAdmin.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin'

const { Component } = require("react");

export default class EditAdmin extends Component{

    state = {
        admins: [],
        email: "",
        password: "",
        error:false
    }
    
    async componentDidMount() {
        await this.getAdmins(this.props.match.params.id);
        
    }

    getAdmins = async (id) => {
        try {
          const response = await fetch(`https://bloggers-appp.herokuapp.com/admins/${id}`);
          const result = await response.json();
          if (result.success) {
            const admins = result.result;
            const email=admins.email
            const password=admins.password
            this.setState({ email,password});
          } else {
            const error = result.message;
            this.setState({ error });
          }
        } catch (err) {
          this.setState({ error_message: err })
        }
    }

    updateAdmin = async (id, params) => {
        let { email, password } = params;
        let url = `https://bloggers-appp.herokuapp.com/Admins/update/${id}`;
        // let paramsErr = "you need at least name or email properties to update a contact";
    
        // create our url
        // if (!email && !password) throw new Error(paramsErr);
        // else if (email && !password) url += `/?email=${email}`;
        // else if (!email && password) url += `/?password=${password}`;
        // else if (email && password) url += `/?email=${email}&password=${password}`;
    
        try {
           

           await fetch(url,{
            method:"put",
            body: JSON.stringify({email,password}),
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
        const id=this.props.match.params.id;
        let { email, password } = this.state;
        this.updateAdmin(id,{ email, password });
        this.props.history.goBack()

    }

    navigateToAdmins=()=>{
        this.props.history.goBack()
    }


    render(){
        let {email, password ,error} = this.state;
        return error ? (
            <div>
              <p>{error}</p>
              <button onClick={this.clearError}>refresh</button>
            </div>
            ) : (
            <>
            <NavAdmin onLogout={this.props.onLogout}/>
            <div class="margT">
            <div class="container" id="container" >
                 <h1 class=" mb-4 text-light">EDIT ADMIN</h1>
                 <form onSubmit={this.handleSubmit}>
                 <div class="form-group" id="Email">
                        <label for="email">Email</label>
                        <input type="email"
                        required
                        autoFocus
                        id="email"
                        name="email"
                        class="form-control" 
                        value={email}
                        onChange={this.handleChange}></input> 
                    </div>

                    <div class="form-group" id="password">
                         <label for="password">Password</label>
                        <input type="password"
                        required 
                        id="password"
                        name="password"  
                        class="form-control"
                        value={password}
                        onChange={this.handleChange}></input> 
                    </div >
        
                    <div  class="control" id="control">
                        <button class="btn btn-outline-secondary mr-2 mb-4" onClick={this.navigateToAdmins}>Cancel</button>
                        <button type="submit" class="btn btn-outline-primary mb-4">UPDATE</button>
                    </div>
                 </form>
                    
            </div>
        </div>
        </>
        )}}