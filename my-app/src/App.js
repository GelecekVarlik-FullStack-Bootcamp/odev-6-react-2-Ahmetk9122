import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import {Login} from "./components/Login"
import {Todo} from "./components/Todo"
function App() {

  return (
    <Router>
    <Routes>
    <Route path="/login" element ={<Login></Login>}/>
    <Route path="/todo" element ={<Todo></Todo>}/>
    </Routes>
    </Router>
  );
}


export default App;
