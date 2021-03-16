
import Blogs from "./blogs"
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isLoading} = useFetch("http://localhost:8000/blogs");

    return ( 
       
        <div className="home">
            
            { isLoading && <div>Loading...</div>}
           { blogs && <Blogs  blogs={blogs} title="All blogs!"/> }
        </div>

    );
}
 
export default Home;