import { Link } from "react-router-dom"
const Blogs = ({ blogs, title }) => {
    return ( 
        <div>
            <p className="title">{ title }</p>
            <div className="blog-list">
            
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to= {`/blogs/${blog.id}`}>
                            <h3>{blog.title}</h3>
                            <p className="author">Written by {blog.author}</p>
                        </Link>
                      
                    </div>
                ))}
            </div>
        </div>
      
    );
}
 
export default Blogs;