import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import {Main1} from './components/Main1';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Main2 } from './components/Main2';
function App() {

  return (
    <div>
     <Navbar/>
     <Router>
     <Routes>
      <Route exact path={'/Main1'} Component={Main1}/>
      <Route exact path={'/Main2'} Component={Main2}/>
     </Routes>
     </Router>
     <Footer/>
    </div>
  )
}

export default App
