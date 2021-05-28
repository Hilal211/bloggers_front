import './BlogCard.css'
import section8 from '../../image/section8.png'
import Checkbox from 'react-bootstrap'
import { Link } from "react-router-dom"
const { Component } = require("react");


export default class BlogCard extends Component {

  state = {

    id: this.props.id,
    title: this.props.title,
    description: this.props.description,
    content: this.props.content,
    image: this.props.image,
    views: this.props.views,
    date: this.props.date,
    isFeatured: this.props.isFeatured
  }





  render() {
    let { id, title, description, content, image, views, isFeatured, deleteBlog } = this.props;
    let dateBlog = this.props.date;

    return (

      <div>
  <div class="BigCard">
    <div class="plx-card gold ml-5 pl-5 mr-4">

      <div class="pxc-avatar"><img src={`http://localhost:8000/images/${image}`}/></div>
      <div class="pxc-stopper ml-5">   </div>
      <div class="pxc-subcard" w-15>
        <div class="pxc-title mb-4">{title}</div>
        <div class="pxc-sub"> {description}  </div>
        <div class="pxc-feats text-light"> {dateBlog.substring(0, dateBlog.indexOf('T'))}  </div>
        <div class="bottom-row">
          <div class="links"><div class="list-inline-item outline-secondary viewstbtn  mr-1 mt-2">
            <box-icon color="outline-secondary" size="xs" name="show" class="mr-2" color="white" ></box-icon>
            <label class="text-light"> {views}</label>
          </div>
          <Link to={`/dashboard/editBlog/${id}`}>
          <button class="btn editbtn text-light mr-2" >Edit</button>
          </Link>
          <button class="btn deletebtn text-light mr-4" onClick={() => deleteBlog(id)}>Delete</button>

          <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled" checked={isFeatured}></input>
            <label class="custom-control-label mt-2 ml-1" for="defaultCheckedDisabled"></label>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )

  }
}




