import { Component } from "react";
import './MessageCard.css'
import {Link} from 'react-router-dom'

export default class MessageCard extends Component{
    state={
        id:this.props.id,
        title:this.props.title,
        name:this.props.name,
        date:this.props.date
    }
    render(){
        let{id,title,name,date}=this.props
        return(

            <tr class="messageC">

            <td> {name} </td>
            <td> {title}</td>
            <td> {date.substring(0,date.indexOf('T'))}</td>
            <td>
       <div className="col2 seemorebtn">
                <Link to={`/dashboard/messageDetails/${id}`} className="btnsub">See more</Link>

                </div>
                </td>
          </tr>

        )
    }
}