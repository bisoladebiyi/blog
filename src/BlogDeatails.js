import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {    
    const { id } = useParams()
    const { data :blog, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory()
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/")
        })
    }
    return ( 
        
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { blog && (
                <article>
                    <h3>{ blog.title }</h3>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>
                    <button onClick = { handleDelete }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;