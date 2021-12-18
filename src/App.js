import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
