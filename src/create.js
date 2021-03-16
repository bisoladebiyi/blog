import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("bee")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        const blog =  { title, body, author}
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false)
            console.log("new blog added")
            history.push("/")
        })
    }
    return ( 
        <div className="create">
            <form onSubmit= {handleSubmit}>
                <label>Blog title: </label>
                <input type="text" 
                required
                value = { title }
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea
                required
                value = { body }
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author: </label>
                <select
                required
                 value = { author }
                 onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option>Bee</option>
                    <option>Yossee</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button>Adding your blog</button>}
            </form>
            
        </div>
     );
}
 
export default Create;