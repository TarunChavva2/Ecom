import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import HomePage from './Ecommerce Store/ProductModule/components/home';

const routes = [
  <Route path='/' component={HomePage} />,
]

function App() {
  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  )
};

export default App;
