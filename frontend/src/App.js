// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Details from './Details';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path='/details' element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default App;
