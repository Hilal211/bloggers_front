import { Component } from "react";
import './SideNavB.css'
import TopBlog from '../../components/TopBlog/TopBlog'

export default class SideNavB extends Component {

    state = {
        blogs: [],
        title: ""

    }

    async componentDidMount() {
        await this.getBlogs();

    }

    getBlogs = async () => {
        try {
            const response = await fetch('//localhost:8000/blogsByViews');
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

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // handleSubmit = (event) => {
    //     event.nativeEvent.preventDefault();
    //     let {title} = this.state;
    //     this.getBlogsByTitle({title});

    // }






    render() {
        let { blogs, title } = this.state
        let { getBlogsByTitle } = this.props



        return (

            <div class="navSide">
                <ul>

                    <li class="search_container">
                        <form class="search">
                            <input type="text"
                                class="searchTxt"
                                placeholder="Search"
                                name="title"
                                value={title}
                                onChange={this.handleChange}></input>
                            <div class="searchBtn"
                             onClick={() => getBlogsByTitle(title)}>
                                <box-icon color="#0DB8DE" size="sm" name="search-alt-2" id="searchIcon"></box-icon>
                            </div>
                        </form>
                    </li>
                    <li class="NavDesc">TOP VIEWED BLOGS</li>
                    {blogs.map(blog => (
                        <TopBlog
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                        />
                    ))}
                </ul>
            </div>







        )


    }
}