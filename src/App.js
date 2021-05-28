//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import AdminPage from './pages/AdminPage/AdminPage.jsx'
import AddAdmin from './pages/AddAdmin/AddAdmin.jsx'
import EditAdmin from './pages/EditAdmin/EditAdmin'
import BlogPage from './pages/BlogPage/BlogPage'
import AddBlog from './pages/AddBlog/AddBlog'
import EditBlog from './pages/EditBlog/EditB'
import PageBlog from './pages/PageBlog/PageBlog.jsx'
import AboutUS from './pages/AboutUS/AboutUs'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import HomePage from './pages/Homepage/HomePage'
import { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from './pages/Login/login';
import { getCookie, removeCookie } from './cookie';
import ContactUs from './pages/ContactUs/ContactUs'
import MessadeDetails from './pages/MessageDetails/MessageDetails'
import Header from './components/Header';
import InboxPage from './pages/InboxPage/InboxPage.jsx'
import PageSubscribers from './pages/PageSubscribers/PageSubscribers'

class App extends Component {
  state = {
    user: {
      id: null,
      admin: false
    }
  }

  async componentDidMount() {
    try {
      let id = getCookie('id');
      let token = getCookie('token');
      if (id && token) {
        let headers = { 'Content-Type': 'application/json', id, token };
        let response = await fetch('//localhost:8000/getUserData', { headers });
        let data = await response.json();
        if (data.success) {
          let user = data.result;
          this.setState({ user });
        } else {
          removeCookie('id');
          removeCookie('token');
          this.setState({});
        }
      }
    } catch (e) {
      removeCookie('id');
      removeCookie('token');
      this.setState({});
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    // this.props.history.push('/');
    this.setState({ user: { token: null } });
  }


  render() {
    let { user } = this.state;
    let token = getCookie('token');
    return (


      <>
        {/* //  <Header
      //     user={user}
      //     onLogout={this.onLogout}
      //   /> */}

        <Switch>
          {/* Admin PAnel */}
          <Route path="/dashboard/blogPage" render={props =>
            token ? <BlogPage {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/adminPage" render={props =>
          token ? <AdminPage {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/addAdmin" render={props =>
          token ? <AddAdmin {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/editAdmin/:id" render={props =>
          token ? <EditAdmin {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/addBlog" render={props =>
          token ? <AddBlog {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/editBlog/:id" render={props =>
          token ? <EditBlog {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/inboxPage" render={props =>
            token ? <InboxPage {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/messageDetails/:id" render={props =>
            token ? <MessadeDetails {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>
          <Route path="/dashboard/subscribers" render={props =>
            token ? <PageSubscribers {...props} onLogout={this.onLogout} /> : <Redirect {...props} to="/" />
          }>
          </Route>

          {/* User */}
          <Route path="/" exact component={HomePage} />
          <Route path="/pageBlog" component={PageBlog} />
          <Route path="/aboutUs" component={AboutUS} />
          <Route path="/blogDetails/:id" component={BlogDetails} />
          <Route path="/contactUs" component={ContactUs} />


          <Route path="/login" render={props => {
            return token ? <Redirect {...props} to="/dashboard/blogPage" /> : (
              <Login
                {...props}
                user={user}
                onLogin={this.onLogin}
              />
            )
          }} />
        </Switch>





      </>

    );
  }

}

export default withRouter(App);
