import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePages from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePages} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
