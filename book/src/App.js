import React from 'react';
import Library from './components/Library';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MyList from './components/MyList';

function App() {
  return (
    <>
     <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/library' element ={<Library/>} >
      </Route>
      <Route path='/booklist' element ={<MyList/>} >
      </Route>
      <Route path='/' element ={<Library/>} >
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

