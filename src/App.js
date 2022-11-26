import React, { Component } from 'react';
import Navigation from './bundles/components/Navigations';
import Welcome from './bundles/components/Welcome';
import Skills from './bundles/components/Skills';
import MyCareers from './bundles/components/MyCareers';
import LinkList from './bundles/components/LinkList';
import Contact from './bundles/components/Contact';
import MyFooter from './bundles/components/MyFooter';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation/>
            <Routes>
              <Route path="/" exact element={<Welcome/>} />
            </Routes>
          <MyFooter/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//<Route path="/skills/" element={<Skills/>} />
//<Route path="/my_careers/" element={<MyCareers/>} />
//<Route path="/link_list/" element={<LinkList/>} />
//<Route path="/contact/" element={<Contact/>} />
