import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HelpCenter from './helpcenter/HelpCenters';
import Home from './home/Home';
import RequestBook from './requestbook/RequestBooks';
import Children from './children/Childrenb';
import Education from './education/Educationb';
import Fiction from './fiction/Fictionb';
import NonFiction from './nonfiction/NonFictionb';
import Login from './components/Login';
import Bestseller from './components/Bestseller';
import Signup from './components/Signup';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/RequestBook" element={<RequestBook />} />
        <Route path="/Children" element={<Children />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Fiction" element={<Fiction />} />
        <Route path="/NonFiction" element={<NonFiction />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Bestseller" element={<Bestseller />} />
        <Route path="/Signup" element={<Signup/>} />
       
        

      </Routes>

  );
};

export default App;
