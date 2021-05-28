import { Component } from "react";
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import './MessageDetails.css'
export default class MessageDetails extends Component {

    state = {

        name: "",
        email: "",
        title: "",
        messageM: "",
        dateM: ""
    }

    // navigateToAdmins=()=>{
    //     this.props.history.goBack()
    // }
    async componentDidMount() {
        window.scroll({
            top: 30,
            left: 0,
            behavior: 'smooth'
        });
        await this.getMessage(this.props.match.params.id);
        console.log(this.props.match.params.id)
    }


    getMessage = async (id) => {

        try {
            const response = await fetch(`//localhost:8000/contactsDetails/${id}`);
            const result = await response.json();
            if (result.success) {
                const messagee = result.result;
                const name = messagee.name;
                const email = messagee.email;
                const title = messagee.title;
                const messageM = messagee.message;
                const dateM = messagee.dateC;
                this.setState({ name, email, title, messageM, dateM });
                console.log(name, email, title, messageM, dateM)
            } else {
                const error = result.message;
                this.setState({ error });
            }
        } catch (err) {
            this.setState({ error_message: err })
        }
    }
    render() {
        let { name, email, title, messageM, dateM } = this.state

        return (
            <div>
                <NavAdmin onLogout={this.props.onLogout}/>
                <div class="containerMessage container" id="container">
                    <h1 class=" titleMsg">Message</h1>
                    <div class="nameM infoC"><span class="atributt">From: </span>{name}</div>
                    <div class="emailM infoC"><span class="atributt">Email: </span>{email}</div>
                    <div class="titleM infoC"><span class="atributt">Title: </span>{title}</div>
                    <div class="messageM infoC atributt">Message:</div>
                    <div>
                        <textarea
                            readOnly
                            name="content"
                            value={messageM}
                            class="messageContent"
                            rows="5"
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div class="dateM infoC">{dateM.substring(0, dateM.indexOf('T'))}</div>
                </div>
            </div>
        )
    }
}