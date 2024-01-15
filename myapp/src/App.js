import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ImageOne from './components/imageOne'
import TextBox from './components/textBox';
import NavBar from './components/navbar';


function App() {
  return (

    <div className="App">

     <Router>
     <NavBar/>
       <Routes>      
         <Route path='/' element={<Home />} />
         <Route path='/webapp' element={<ImageOne/> } />
       </Routes>
     </Router>
   </div>
  );
}

export default App;
