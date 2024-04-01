import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Wrapping the application with BrowserRouter for routing */}
      <Routes> {/* Defining routes for different pages of the application */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
