import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import AbbreviationsOrTitle from './components/AbbreviationsOrTitle/AbbreviationsOrTitle';
import Address from './components/Address/Address';

function App() {
  return (
    <div className="">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/start">
            <Home/>
          </Route>
          <Route path="/abbreviationsortitle">
            <AbbreviationsOrTitle/>
          </Route>
          <Route path="/address">
            <Address/>
          </Route>
          <Route  path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
