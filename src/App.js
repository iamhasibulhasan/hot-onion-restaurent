import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SingleFood from './components/Pages/SingleFood/SingleFood';
import Signup from './components/Pages/Signup/Signup';
import Login from './components/Pages/Login/Login';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/food">
            <SingleFood></SingleFood>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
