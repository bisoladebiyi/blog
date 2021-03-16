
import Navbar from './Navbar'
import Home from './home'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom"
import Create from './create';
import BlogDetails from './BlogDeatails';


function App() {

  return (
    <Router>
      <div className="App">

        <Navbar />
        <hr/>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
          <p className="note">N.B : i know this blog ugly as shit but i just need to learn react isall 😭 </p>
        </div>

      </div>
    </Router>

  );

}

export default App;
