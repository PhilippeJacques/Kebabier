import './App.css';
import One from "../src/pages/One";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Two from './pages/Two';
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/">
            <One />
          </Route>
          <Route exact path="/two">
            <Two />
          </Route>
          <Route exact path="/three">
            <Three />
          </Route>
          <Route exact path="/four">
            <Four />
          </Route>
          {/* <Route exact path="/five">
            <Five />
          </Route> */}
          
        </Switch>
      
    </BrowserRouter>
    </>
  );
}

export default App;
