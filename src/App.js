import "./css/app.css";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Services from "./components/Services";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import BMI from "./components/BMI";
function App() {

  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />}/>
        <Route path='/serv' element={<Services />}/>
        <Route path='/bmi' element={<BMI />}/> 
       
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
