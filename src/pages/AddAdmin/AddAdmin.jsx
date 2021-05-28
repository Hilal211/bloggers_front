import './AddAdmin.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin'

const { Component } = require("react");

export default class AddAdmin extends Component {

    state = {

        email: "",
        password: "",
        error: false
    }
    componentDidMount() {
        this.setState({ email: "", password: "" })
    }

    createAdmin = async (params = {}) => {
        let { email, password } = params;
        let url = `//localhost:8000/Admins/create`;
        let paramsErr = "you need at least name or email properties to update a admin";
        if (!email || !password) throw new Error(paramsErr);
        try {
            await fetch(url, {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (err) {
            this.setState({ error_message: err })
        }

    }
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.nativeEvent.preventDefault();
        let { email, password } = this.state;
        this.createAdmin({ email, password });
        this.setState({ email: "", password: "" })
        document.getElementById("email").focus();
        this.props.history.goBack()
    }

    navigateToAdmins = () => {
        this.props.history.goBack()
    }



    render() {
        let { email, password, error } = this.state;
        return error ? (
            <div>
                <p>{error}</p>
                <button onClick={this.clearError}>refresh</button>
            </div>
        ) : (<>
            <NavAdmin onLogout={this.props.onLogout}/>
            <div class="margT">
                <div class="container" id="container" >
                    <h1 class=" mb-4 text-light">NEW ADMIN</h1>
                    <form onSubmit={this.handleSubmit} aria-autocomplete="none">
                        <div class="form-group" id="Email">
                            <label for="email">Email</label>
                            <input type="email"
                                required
                                autoFocus
                                id="email"
                                name="email"
                                class="form-control"
                                value={email}
                                onChange={this.handleChange}
                                autoComplete="new-password"></input>
                        </div>

                        <div class="form-group" id="password">
                            <label for="password">Password</label>
                            <input type="password"
                                required
                                id="password"
                                name="password"
                                class="form-control"
                                value={password}
                                onChange={this.handleChange}
                                autoComplete="new-password"></input>
                        </div >

                        <div class="control" id="control">
                            <button class="btn btn-outline-secondary mr-2 mb-4" onClick={this.navigateToAdmins}>Cancel</button>
                            <button type="submit" class="btn btn-outline-primary mb-4">Save</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
        )
    }
}