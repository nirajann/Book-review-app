import Register from '../src/components/register';
import Login from './components/login';
import Home from './components/home';
import { useState } from "react";
import BookDetail from "./components/bookdetail";
import Books from "./components/book";
import { Link,Routes,Route, useMatch} from 'react-router-dom';


import './nav.css'

function App() {
  const [books, setBooks] = useState([])

  const match = useMatch("/books/:id")

  const book = match 
  ? books.find(b => b._id === match.params.id) 
  : null


  const margin = {
    margin: 3,
    padding: 10
  }

  return(
    <>
    <div class="container">
    
    <div class=".div">
    <Link  class="Link" style={margin} to={"/"}>Dashboard</Link>
      <Link  class="Link" style={margin} to={"/Login"}>Login</Link>
      <Link class="Link" style={margin} to={"/Register"}>Register</Link>
      <Link class="Link" style={margin} to={'/books'}>Books</Link>
    </div>
    <div style={{padding: "20px"}}></div>
    <Routes>
    <Route path="/books/:id" element={<BookDetail books={book} />} />
    <Route path="/books" element={<Books books={books} setBooks={setBooks} />} />
    <Route path="/Login" element={<Login/>}/> 
    <Route path="/Register" element={<Register/>}/> 
    <Route path="/" element={<Home/>}/>
    </Routes>
  
    </div>
    </>

  );
}

export default App;
