import React, { Component } from "react";
import Navigation from './bundles/components/Navigations';
import Welcome from './bundles/components/Welcome';
import Tokenomics from './bundles/components/Tokenomics';
import Usage from './bundles/components/Usage';
import LinkList from './bundles/components/LinkList';
import Audit from './bundles/components/Audit';
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
                    <Route path="/tokenomics/" element={<Tokenomics/>} />
                    <Route path="/usage/" element={<Usage/>} />
                    <Route path="/link_list/" element={<LinkList/>} />
                    <Route path="/audit/" element={<Audit/>} />
                    <Route path="/contact/" element={<Contact/>} />
                </Routes>
                <MyFooter/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
