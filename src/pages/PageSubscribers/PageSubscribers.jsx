
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import SubscribersCard from '../../components/SubscribersCard/SubscribersCard'

const { Component } = require("react");

export default class Inbox extends Component {

  state = {
    sub: [],
    name: "",
    title: "",
    error: false
  }


  async componentDidMount() {
    await this.getsub();

  }

  getsub= async () => {
    try {
      const response = await fetch('https://bloggers-appp.herokuapp.com/Subscribers');
      const result = await response.json();
      if (result.success) {
        const sub = result.result;
        this.setState({ sub });
      } else {
        const error = result.message;
        this.setState({ error });
      }
    } catch (err) {
      this.setState({ error_message: err })
    }
  }



  render() {
    let{sub}=this.state
    
    return (<div>
      <NavAdmin onLogout={this.props.onLogout}/>
      <div class="margT inboxP">
        <div class="container pb-1" id="container">
          <h1 class="mb-4" id="SubscriberTitle">Subscribers LIST</h1>
          <div>
          </div>
          <table border="1" class="mb-4">
            <thead>

              <th> Id </th>
              <th> Name </th>
              

            </thead>
            <tbody>



            {sub.map(sub => (
                        <SubscribersCard
                        key={sub.id}
                        id={sub.id}
                        name={sub.email}
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