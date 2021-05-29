import { Component } from "react";
import Navb from '../../components/Navb/Navb.jsx'
import SideNavB from '../../components/SideNavB/SideNavB.jsx'
import BlogCardU from '../../components/BlogCardU/BlogCardU'
import './PageBlog.css'


export default class PageBlog extends Component {

    state = {
        blogs: [],
        blogst:[],
        ifSearch:false
    }

    async componentDidMount() {
        await this.getBlogs();
        window.scrollTo(0, 0);

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

    getBlogsByTitle = async title => {
        console.log(title)
    // let{ifSearch}=this.state
        let url = `https://bloggers-appp.herokuapp.com/blogsByTitle/${title}`;
        let paramsErr = "you need at least name or email properties to update a admin";
        if (!title) throw new Error(paramsErr);
        try{
            const response=await fetch(url)
        
            const result = await response.json();
          if (result.success) {
            const blogst = result.result;
            this.setState({blogst})
            this.setState({ifSearch:true})
            
            
            
          
            
          } else {

            const error = result.message;
          }
        }catch(err){
             this.setState({ error_message: err })
         }
        
    }

    render() {
        let { blogs ,ifSearch,blogst} = this.state;
        console.log("blogst",blogst)
        console.log("blogs",blogs)
        return ifSearch ?(
            <>
                <Navb />
                <div class="containerSB">
                    <div><SideNavB 
                    getBlogsByTitle={this.getBlogsByTitle}/></div>
                    <div class="x" >
                        {blogst.map(blogt => (
                            <BlogCardU
                                key={blogt.id}
                                id={blogt.id}
                                title={blogt.title}
                                description={blogt.description}
                                image={blogt.image}
                                views={blogt.views}
                                date={blogt.dateB}
                            />

                           
                        ))}
                    </div>
                    
                </div>
                


            </>
        ): (
            <>
            <Navb />
            <div class="containerSB">
                <div><SideNavB 
                getBlogsByTitle={this.getBlogsByTitle}
                /></div>
                <div class="x" >
                    {blogs.map(blog => (
                        <BlogCardU
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            views={blog.views}
                            date={blog.dateB}
                        />
                    ))}
                </div>
                
            </div>
            


        </>  
        )
    }

}