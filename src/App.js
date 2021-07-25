import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import Favorite from './components/notes/Favorite';
import NotesDetail from './components/notes/NotesDetail';
import EditForm from './components/notes/EditForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorite} />
        <Route path="/detail/:id" component={NotesDetail} />
        <Route path="/edit_note/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
