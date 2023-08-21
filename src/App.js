import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

// Course Pages
import Vlsi from './pages/vlsi_course';
import Vbnp from './pages/vnbp';
import Archi from './pages/architecture';
import Stat from './pages/stat';
//Router
import { Route, Switch, useLocation } from 'react-router-dom';
//Animation
//mport { AnimatePresence } from 'framer-motion';


//imports

import Topbar from "./components/topbar/Topbar";
import Me from "./components/About/Me";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react";


function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">

      <GlobalStyle />

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Switch location={location} key={location.pathname} >
          <Route path="/" exact >
              <AboutUs/>
          </Route>
          <Route path="/about" exact >
              <Me/>
          </Route>
          <Route path="/portfolio" exact>
              <Portfolio />
          </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/vlsi" >
          <Vlsi />
        </Route>
        <Route path="/work/comp_architecture" >
          <Archi />
        </Route>
        <Route path="/work/vbnp" >
          <Vbnp />
        </Route>
        <Route path="/work/stat" >
          <Stat />
        </Route>
        <Route path="/contact">
            <ContactUs />
          </Route>
      </Switch>       
        </div>
  );
}

export default App;
