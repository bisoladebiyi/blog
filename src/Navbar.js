import { Link } from "react-router-dom"
const Navbar = () => {
    return ( <nav className="navbar">
        <p>Bee's Blog</p>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav> );
}
 
export default Navbar;