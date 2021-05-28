import { Component } from "react";
import './BlogFeatured.css'
import pic1 from  '../../image/reactPic.png'
import {Link} from 'react-router-dom'

export default class BlogFeatured extends Component{
  state = {
    
    id: this.props.id,
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    views: this.props.views,
    date: this.props.date,
}

viewCount=async ()=>{
await fetch(`https://api.ipify.org/?format=json`)
}
  

    render(){
      let { id,title, description,image,views} = this.props;
      let dateBlog=this.props.date;
        return(
          

            <div class="card_u" onClick={this.viewCount}>
              <Link to={`/blogDetails/${id}`}>
            <div class="imageB">
            <img src={`http://localhost:8000/images/${image}`}/>
            </div>
            <div class="card-header_u">
              <h1>{title}</h1>
            </div>
            <div class="card-body_u">
              <p>
                {description}
              </p>
            </div>
            <div class="footerCard_u">
              <div class="viewB_u">{views} views</div>
              <div class="dateB_u">{dateBlog.substring(0,dateBlog.indexOf('T'))}</div>
            </div>
            </Link>
          </div>
          
      
        )
    }
}