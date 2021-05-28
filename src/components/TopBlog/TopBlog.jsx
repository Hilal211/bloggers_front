import { Component } from "react";
import {Link} from 'react-router-dom'

export default class TopBlog extends Component{

    state = {

        id: this.props.id,
        title: this.props.title
        
       
      }
    render(){
        let {id,title} = this.props;
        return(
            <Link to={`/blogDetails/${id}`}>
            <li class="titleB">{title}</li>
            </Link>
        )
    }
}