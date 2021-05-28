import './SubscriberCard.css'
import unnamed from '../../image/unnamed.png'
const { Component } = require("react");

export default class SubscriberCard extends Component{

    render(){
        return(
    
            <div class="card mt-4">
            <div class="row no-gutters m-1">
                <div class="col-auto">
                  {<img src={unnamed} class="UserImage" /> }
                </div>
                <div class="col">
                    <div class="block px-2">
                        <h4 class="title mb-5">Email Adress</h4>
                        <div class="list-inline-item btn deletebtn text-light">
                          <span> Delete</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }}