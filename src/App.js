import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import WithMaterialUI from './components/register';
//import SimpleSlide from './components/local';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Example from './components/Registerr';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Register' component={Example}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
