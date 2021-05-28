import { Component } from "react";
import NavAdmin from '../../components/NavAdmin/NavAdmin'
import './EditB.css'
import ContentBlog from '../../components/ContentBlog/ContentBlog'
import Uploader from './../../components/Uploader/Uploader'
import { Link } from 'react-router-dom'
export default class EditB extends Component {

    state = {
        blogs: [],
        title: "",
        description: "",
        content: "",
        image: "",
        isFeatured: null,
        dateB: null,
        error: false
    }

    async componentDidMount() {
        await this.getBlogs(this.props.match.params.id);

    }


    getBlogs = async (id) => {
        console.log(id)
        try {
            const response = await fetch(`//localhost:8000/blogs/${id}`);
            const result = await response.json();
            if (result.success) {
                const blogs = result.result;
                const title = blogs.title
                const description = blogs.description
                const content = blogs.content
                const image = blogs.image
                const isFeatured = blogs.isFeatured
                this.setState({ title, description, content, image, isFeatured });
            } else {
                const error = result.message;
                this.setState({ error });
            }
        } catch (err) {
            this.setState({ error_message: err })
        }
    }

    updateBlog = async (id, params) => {
        let { title, description, content, image, isFeatured, dateB } = params;
        let url = `//localhost:8000/blogs/update/${id}`;
        let paramsErr = "you need at least title or desciption or content or image or featured properties to update a blog";

        // create our url
        if (!title && !description && !content && !image && !isFeatured && !dateB) throw new Error(paramsErr);
        // else if (title && description && content && image && isFeatured) = url;
        console.log(JSON.stringify({
            id, title, description, content, image, isFeatured, dateB
        }))

        try {
            await fetch(url, {
                method: "put",
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

    handleChangeCheck = (e) => {
        const { checked } = e.target
        this.setState({
            isFeatured: checked
        })


    }



    handleSubmit = async (event) => {
        event.nativeEvent.preventDefault();
        let timeElapsed = Date.now();
        let datef = new Date(timeElapsed);
        // let datef = date.toLocaleDateString();
        await this.setState({ dateB: datef })
        let { title, description, content, image, isFeatured, dateB } = this.state;
        const id = this.props.match.params.id;
        this.updateBlog(id, { title, description, content, image, isFeatured, dateB });
        this.props.history.goBack()
    }
    render() {
        let { title, description, content, image, isFeatured } = this.state;

        return (

            <>
                <NavAdmin onLogout={this.props.onLogout}/>
                <div class="margT">
                    <form onSubmit={this.handleSubmit}>
                        <div class="container" id="container" >
                            <h1 class=" mb-4 text-light">UPDATE BLOG</h1>
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
                            <div class="form-group" id="full blog">
                                <ContentBlog
                                    value={content}
                                    onChange={this.handleChangeContentBlog}
                                />
                            </div >
                            <div class="uploadcontainer">
                                <Uploader onChange={(image) => {
                                    this.setState({ image })
                                }} />
                            </div>

                            <div class="form-check mt-4 mb-4">
                                <input class="form-check-input" type="checkbox" checked={isFeatured} id="flexCheckDefault" onChange={e => this.handleChangeCheck(e)}></input>
                                <label class="form-check-label text-light " for="flexCheckDefault">
                                    Featured Blog
                        </label>
                            </div>


                            <div class="control">
                                <Link to="/dashboard/blogPage" class="btn btn-outline-secondary">Cancel</Link>
                                <button type="submit" class="btn btn-outline-primary ml-2" >UPDATE</button>
                            </div>
                        </div></form>
                </div>
            </>
        )
    }
}