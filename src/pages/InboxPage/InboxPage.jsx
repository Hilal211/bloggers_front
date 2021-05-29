import './InboxPage.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import MessageCard from '../../components/MessageCard/MessageCard'

const { Component } = require("react");

export default class Inbox extends Component {

  state = {
    contacts: [],
    name: "",
    date: "",
    title: "",
    error: false
  }


  async componentDidMount() {
    await this.getMessage();

  }

  getMessage= async () => {
    try {
      const response = await fetch('https://bloggers-appp.herokuapp.com/Contacts');
      const result = await response.json();
      if (result.success) {
        const contacts = result.result;
        this.setState({ contacts });
      } else {
        const error = result.message;
        this.setState({ error });
      }
    } catch (err) {
      this.setState({ error_message: err })
    }
  }



  render() {
    let{contacts}=this.state
    console.log(contacts)
    return (<div>
      <NavAdmin onLogout={this.props.onLogout}/>
      <div class="margT inboxP">
        <div class="container pb-1" id="container">
          <h1 class="mb-4" id="SubscriberTitle">Contact LIST</h1>
          <div>
          </div>
          <table border="1" class="mb-4">
            <thead>

              <th> Name </th>
              <th> Title </th>
              <th> Date </th>

            </thead>
            <tbody>



            {contacts.map(contact => (
                        <MessageCard
                        key={contact.id}
                        id={contact.id}
                        title={contact.title}
                        name={contact.name}
                        date={contact.dateC} 

                        />

                    ))}
 


            </tbody>

          </table>
        </div>
      </div>



    </div>

    )
  }
}