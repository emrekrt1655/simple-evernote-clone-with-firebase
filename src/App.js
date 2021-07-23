import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import Favorite from './components/notes/Favorite';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
