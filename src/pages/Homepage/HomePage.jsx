import { Component } from "react";
import Navb from '../../components/Navb/Navb'
import BlogFeatured from '../../components/BlogFeatured/BlogFeatured'
import HomeDiv from '../../components/HomeDiv/HomeDiv'
import Footer from '../../components/Footer/Footer'
import './HomePage.css'

export default class HomePage extends Component {

  state = {
    blogs: []
  }

  async componentDidMount() {
     await this.getBlogs();
    window.scrollTo(0, 0);

  }

  getBlogs = async () => {
    try {
      const response = await fetch('https://bloggers-appp.herokuapp.com/blogsFeatured');
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

 

  render() {
    let { blogs } = this.state;
    return (
      <>
        <Navb />
        <HomeDiv />

        <div class="container_u">
          <div class="row">
            {blogs.map(blog => (
              <BlogFeatured
                key={blog.id}
                id={blog.id}
                title={blog.title}
                description={blog.description}
                content={blog.content}
                image={blog.image}
                views={blog.views}
                date={blog.dateB}
              />
            ))}


          </div>
          
        </div>
        <div class="footerr"><Footer/></div>
        
      </>

    )
  }
}