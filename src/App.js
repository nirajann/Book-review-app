import Register from '../src/components/register';
import Login from './components/login';
import Home from './components/home';
import Registraion from './components/userRegister';
import { BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';


import './Registration.css'

function App() {
  
  return(
    <>
    <div class="container">
    <Router>
    <div class=".div">
      <Link  class="Link" to={"/Login"}>login</Link>
      <Link class="Link" to={"/Register"}>Regitser</Link>
      <Link  class="Link" to={"/"}>dashboard</Link>
    </div>
    <div style={{padding: "20px"}}></div>
    <Routes>
      <Route path="/Login" element={<Login/>}/> 
      <Route path="/Register" element={<Register/>}/> 
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
    </div>
    </>

  );
}

export default App;
