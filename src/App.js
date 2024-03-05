import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./components/screen/Screen";
import './App.css';

import Home from './components/container/home/Home.js';
import About from './components/container/about/About.js';
import Services from './components/container/services/Services.js';
import Blog from './components/container/blog/Blog.js';
import Gallery from './components/container/gallery/Gallery.js';
import Career from './components/container/career/Career.js';
import Contact from './components/container/contact/Contact.js';
import It_sector from "./components/includes/It_sector.js";
import Loader from "./components/screen/loader.js";

export const Context = createContext();

function App() {
  const [loading, setLoading] = useState(false); // State for managing loading

  return (
    <Context.Provider value={{ loading, setLoading }}>
      <BrowserRouter>
        {/* Render the Loader component conditionally based on the loading state */}
        {loading && <Loader />}
        <Screen>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/it-Sector" element={<It_sector />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Screen>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
