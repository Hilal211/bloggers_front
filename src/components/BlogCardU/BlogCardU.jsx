import './BlogCardU.css'
import Checkbox from 'react-bootstrap'
import { Link } from "react-router-dom"
const { Component } = require("react");


export default class BlogCard extends Component {

  state = {

    id: this.props.id,
    title: this.props.title,
    description: this.props.description,
    image: this.props.image,
    views: this.props.views,
    date: this.props.date
   
  }





  render() {
    let { id, title, description, image, views } = this.props;
    let dateBlog = this.props.date;

    return (
        
      <div class="BigCard">
         <Link to={`/blogDetails/${id}`}>
        <div class="plx-card gold ml-5 pl-5">

          <div class="pxc-avatar"><img src={`http://localhost:8000/images/${image}`} /></div>
          <div class="pxc-stopper ml-5">   </div>
          <div class="pxc-subcard" w-15>
            <div class="pxc-title mb-4">{title}</div>
            <div class="pxc-sub"> {description}  </div>
            <div class="pxc-feats text-light"> {dateBlog.substring(0,dateBlog.indexOf('T'))}  </div>
            <div class="bottom-row">
              <div class="links"><div class="list-inline-item outline-secondary viewstbtn  mr-1 mt-2">
                <box-icon color="outline-secondary" size="xs" name="show" class="mr-2" color="white" ></box-icon>
                <label class="text-light"> {views}</label>
              </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      
      

    )

  }
}