import './AddBlog.css'
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import Uploader from './../../components/Uploader/Uploader'
import ContentBlog from '../../components/ContentBlog/ContentBlog'
import {Link} from "react-router-dom"
const { Component } = require("react");

export default class AddBlog extends Component {
    state = {

        title: "",
        description: "",
        content: "",
        image: "",
        isFeatured: false,
        dateB: null,
        error: false
    }

    createBlog = async (params = {}) => {
        let { title, description, content, image, isFeatured, dateB } = params;
       

        let url = `https://bloggers-appp.herokuapp.com/blogs/create`;
        let paramsErr = "you need at least title or description or a content or picture properties to update a blog";
        if (!title || !description || !content || !image) throw new Error(paramsErr);
        try {
            await fetch(url, {
                method: "post",
                body: JSON.stringify({ title, description, content, image, isFeatured, dateB }),
                headers: { 'Content-Type': 'application/json' },
                
            });
        } catch (err) {
            this.setState({ error_message: err })
        }

    }


    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleChangeContentBlog = content => {
        this.setState({ content });
    }

    // handleChangeField = (event) => {
    //     let { name, files } = event.target;
    //     this.setState({ [name]: files[0] });
    // }
    

    handleSubmit = async (event) => {
        event.nativeEvent.preventDefault();
        let timeElapsed = Date.now();
        let datef = new Date(timeElapsed);
        // let datef = datef.toLocaleDateString();
        await this.setState({ dateB: datef })
        let { title, description, content, image, isFeatured, dateB } = this.state;
        this.createBlog({ title, description, content, image, isFeatured, dateB });
        console.log(title, description, content, image, isFeatured, dateB)
        this.props.history.goBack()
    }


    handleChangeCheck = (e) => {
        const { checked } = e.target
        this.setState({
            isFeatured: checked
        })


    }

    render() {
        let { title, description, content, image, isFeatured } = this.state;
        console.log({content});
        return (
                <>
                <NavAdmin onLogout={this.props.onLogout}/>
            <div class="margT">
                <form onSubmit={this.handleSubmit}>
                    <div class="container" id="container" >
                        <h1 class=" mb-4 text-light">NEW BLOG</h1>
                        <div class="form-group" id="description">

                            <label for="title" class="mb-1">Title</label>
                            <input
                                required
                                type="text"
                                name="title"
                                value={title}
                                class="form-control"
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div class="form-group" id="description">
                            <label for="description" class="mb-1">Description</label>
                            <textarea
                                required
                                name="description"
                                value={description}
                                class="form-control"
                                rows="1"
                                onChange={this.handleChange}
                            ></textarea>
                        </div>
                        <div class="form-group" id="full_blog">
                            <ContentBlog
                                value={content}
                                onChange={this.handleChangeContentBlog}
                            />
                        </div >
                        <div class="uploadcontainer">
                        <Uploader onChange={(image) => {
                    this.setState({image})
                     }}  />
                        </div>

                        <div class="form-check mt-4 mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={e => this.handleChangeCheck(e)}></input>
                            <label class="form-check-label text-light " for="flexCheckDefault">
                                Featured Blog
                        </label>
                        </div>


                        <div class="control">
                            <Link to="/dashboard/blogPage" class="btn btn-outline-secondary">Cancel</Link>
                            <button type="submit" class="btn btn-outline-primary ml-2" >Save</button>
                            
                        </div>
                    </div></form>
            </div>
            </>
            )
    }
}