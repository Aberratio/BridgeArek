import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePages from "./components/SinglePost";
import SingleOccasionalPost from "./components/SingleOccasionalPost";
import Tuesday from "./components/Tuesday";
import Occasional from "./components/Occasional";
import Infos from "./components/Infos";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/info' />
        <Route component={SinglePages} path='/wtorkowe/:slug' />
        <Route component={Tuesday} path='/wtorkowe' />
        <Route component={SingleOccasionalPost} path='/okazjonalne/:slug' />
        <Route component={Occasional} path='/okazjonalne' />
        <Route component={Infos} path='/ogloszenia' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
