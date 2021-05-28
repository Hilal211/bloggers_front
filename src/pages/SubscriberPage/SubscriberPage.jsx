import './SubscriberPage.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin.jsx'
import SubscriberCard from '../../components/SubscriberCard/SubscriberCard.jsx' 

const { Component } = require("react");

export default class SubscriberPage extends Component{

    render(){
        return(<div> 
            <NavAdmin/>
            <div class="p-1 my-container active-cont">
                <div class="container" id="container">
                   <h1 class="mb-4" id="SubscriberTitle">SUBSCRIBER LIST</h1>
                    <a href="" class="btn btn-outline-primary">Send All Mail</a>
                    
                    <SubscriberCard/>
                    <SubscriberCard/>
                    <SubscriberCard/>
                    <SubscriberCard/>
                    
                    
                 </div>
                 
              </div>
              
        </div>
            
        )}
}