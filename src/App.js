import './App.css';

import { useState } from "react";

import Home from './components/Home';
import Areas from './components/Areas';
import Characters from './components/Characters';
import Attractions from './components/Attractions';
import Concessions from './components/Concessions';
import Restaurants from './components/Restaurants';
import AboutUs from './components/AboutUs';
import DisneyBG from './components/images/background-disney-wallpaper-small.png';

import {Routes, Route, Outlet, Link} from "react-router-dom";

export default function App() {
  return (
    <div style={{backgroundImage:`url(${DisneyBG})`, backgroundRepeat:"repeat", width:"100%", minHeight:"100vh"}}>
      <Routes>
        <Route path="/" element={<Layout/>}>          
          <Route index element = {<Home/>} />
          <Route path="areas" element={<Areas/>} />
          <Route path="characters" element={<Characters/>} />
          <Route path="attractions" element={<Attractions/>} />          
          <Route path="concessions" element={<Concessions/>} />
          <Route path="restaurants" element={<Restaurants/>} />
          <Route path="aboutus" element={<AboutUs/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>      
    <div class='Notice'>©2023 Anthony Regner (<span style={{color:'#f00'}}>A</span><span style={{color:'#00f'}}>278</span><span style={{color:'#f60'}}>+π</span>). All images presented on this website are the property of Disney and Gameloft. Information is presented only for the purposes of completing the UI/UX Design assignment.</div>      
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div className="Navigate">
        <ul className="Navigation-Bar">
          <li className='Navigation-Item'><Link className='No-Decor' to="/"             >Home</Link></li>        
          <li className='Navigation-Item'><Link className='No-Decor' to="/areas"        >Areas</Link></li>
          <li className='Navigation-Item'><Link className='No-Decor' to="/characters"   >Characters</Link></li>
          <li className='Navigation-Item'><Link className='No-Decor' to="/attractions"  >Attractions</Link></li>
          <li className='Navigation-Item'><Link className='No-Decor' to="/concessions"  >Concessions</Link></li>
          <li className='Navigation-Item'><Link className='No-Decor' to="/restaurants"  >Restaurants</Link></li>   
          <li className='Navigation-Item'><Link className='No-Decor' to="/aboutus"      >About Us</Link></li>
        </ul>
      </div>

      <Outlet />
      </div>
  );
}

function NoMatch() {
  return (
    <div className="Main-Content-NF">
      <div className="H1-Text-NF">
        Oh no! The magic just isn't here!
      </div>
      <div className="Body-Text" style = {{textAlign:"center"}}>
        Please visit one of the above links to get what you are looking for.
      </div>
    </div>
  )
}