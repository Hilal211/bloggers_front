import { Component } from "react";
import './BlogDetails.css'
import Footer from '../../components/Footer/Footer'
import Navb from '../../components/Navb/Navb'
import ReactMarkdown from "react-markdown";
export default class BlogDetails extends Component{

    state = {
        
        title: "",
        description: "",
        content:"",
        image:"",
        error:false
    }

    navigateToAdmins=()=>{
        this.props.history.goBack()
    }
    async componentDidMount(){
        window.scroll({
            top: 30, 
            left: 0, 
            behavior: 'smooth'
          });
        await this.getBlogs(this.props.match.params.id);
            
    }


    getBlogs = async (id) => {
        try {
          const response = await fetch(`//localhost:8000/blogs/${id}`);
          const result = await response.json();
          if (result.success) {
            const blogs = result.result;
            const title=blogs.title
            const description=blogs.description
            const content=blogs.content
            const image=blogs.image
            this.setState({ title,description, content, image});
          } else {
            const error = result.message;
            this.setState({ error });
          }
        } catch (err) {
          this.setState({ error_message: err })
        }
    }
    render()
    {
        let { title, description, content, image} = this.state;
        return(
            <>
            <Navb/>
            <div class="containerBD">
                <div class="imageBD">
                    <img src={`http://localhost:8000/images/${image}`}/>
                </div>
                <h1 class="titleBD">{title}</h1>
                <p class="descriptionBD">{description}</p>
                <div class="contentBD"><ReactMarkdown source={content} /></div>
                    
                    <button  class="btn btn-outline-primary mb-4 cancelBD" onClick={this.navigateToAdmins}>CANCEL</button>
            </div>
            <Footer/>
            </>
        )
    }
}
