import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import AbbreviationsOrTitle from './components/Details/AbbreviationsOrTitle/AbbreviationsOrTitle';
import Address from './components/Details/Address/Address';
import Attributes from './components/Details/Attributes/Attributes';
import Style from './components/Details/Style/Style';
import Media from './components/Details/Media/Media';
import Paragraph from './components/Details/Paragraph/Paragraph';
import Break from './components/Details/Break/Break';
import Blockquote from './components/Details/Blockquote/Blockquote';

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
          <Route path="/attributes">
            <Attributes/>
          </Route>
          <Route path="/media">
            <Media/>
          </Route>
          <Route path="/style">
            <Style/>
          </Route>
          <Route path="/break">
            <Break/>
          </Route>
          <Route path="/blockquote">
            <Blockquote/>
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
