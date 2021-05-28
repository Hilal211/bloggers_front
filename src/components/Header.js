// import { Component } from "react";
// import { toast } from 'react-toastify';
// import { removeCookie } from '../cookie';
// import { Link } from 'react-router-dom';

// export default class Header extends Component {

//     state = {
//         user: { token: null }
//     }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.user.id !== prevState.user.id) {
//             return ({ user: nextProps.user }) // <- this is setState equivalent
//         }
//         return null;
//     }

    // handleLogout = async () => {
    //     try {
    //         const url = "http://localhost:8000/logout";
    //         const headers = {
    //             'Content-Type': 'application/json',
    //             id: this.state.user.id,
    //             token: this.state.user.token
    //         };
    //         const response = await fetch(url, { method: "POST", headers });
    //         const answer = await response.json();
    //         if (answer.success) {
    //             this.props.onLogout();
    //             toast(`successful logout`);
    //             removeCookie('id');
    //             removeCookie('token');
    //         } else {
    //             toast.error(answer.message);
    //         }
    //     } catch (err) {
    //         toast.error(err.message);
    //     }
    // };

//     render() {
//         let user = this.state.user;
//         return user.token ? (
//             <div>
                
//                 <button onClick={this.handleLogout}>logout</button>
//             </div>
//         ) : (
//             <div>
               
//                 <Link to="/login">login</Link>
//             </div>
//         );
//     }
// }