import React, { Component } from 'react';
import Navigation from './bundles/components/Navigations';
import Welcome from './bundles/components/Welcome';
import Skills from './bundles/components/Skills';
import MyCareers from './bundles/components/MyCareers';
import LinkList from './bundles/components/LinkList';
import Contact from './bundles/components/Contact';
import MyFooter from './bundles/components/MyFooter';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation/>
          <Route path="/" exact component={Welcome} />
          <Route path="/skills/" component={Skills} />
          <Route path="/my_careers/" component={MyCareers} />
          <Route path="/link_list/" component={LinkList} />
          <Route path="/contact/" component={Contact} />
          <MyFooter/>
        </div>
      </Router>
    );
  }
}

export default App;
