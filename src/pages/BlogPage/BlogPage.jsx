import './BlogPage.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin.jsx'
import BlogCard from '../../components/BlogCard/BlogCard.jsx'
import { Link } from "react-router-dom"


const { Component } = require("react");

export default class BlogPage extends Component {

  state = {
    blogs: [],
    // title: "",
    // description: "",
    // content:"",
    // image:"",
    // isFearured:false,
    // date:null,
    error: false
  }

  async componentDidMount() {
    await this.getBlogs();

  }

  getBlogs = async () => {
    try {
      const response = await fetch('https://bloggers-appp.herokuapp.com/blogs');
      const result = await response.json();
      if (result.success) {
        const blogs = result.result;
        this.setState({ blogs });
      } else {
        const error = result.message;
        this.setState({ error });
      }
    } catch (err) {
      this.setState({ error_message: err })
    }
  }

  deleteBlog = async id => {
    try {

      const response = await fetch(`https://bloggers-appp.herokuapp.com/blogs/delete/${id}`, { method: "delete" });
      const result = await response.json();


      if (result.success) {

        let stateBlogs = [...this.state.blogs].filter(blog => blog.id !== id);
        this.setState({ blogs: stateBlogs });

      } else this.setState({ error: result.message });

    } catch (err) {
      this.setState({ error_message: err })
    }
  }

  render() {
    let { blogs } = this.state;
    return (<div>
      <NavAdmin onLogout={this.props.onLogout} />
      <div class="margT ">
        <div class="container pb-1" id="container">
          <h1 class="mb-4" id="BlogTitle">BLOG ARTICLE</h1>
          <Link to="/dashboard/addBlog" class="btn btn-outline-primary">New Blog</Link>

          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              content={blog.content}
              image={blog.image}
              views={blog.views}
              date={blog.dateB}
              isFeatured={blog.isFeatured}
              deleteBlog={this.deleteBlog}
            />
          ))}

        </div>

      </div>

    </div>

    )
  }
}