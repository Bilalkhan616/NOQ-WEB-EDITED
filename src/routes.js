// Note: Routes component...!

import React from 'react';
// import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from "react-router-dom";

// Note: Importing reuseabale components...!
import MainHome from "./components/parent/index";
import FAQ from "./components/Pages/FAQs/FAQs"
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy"
import TermsCondition from "./components/Pages/TermsConditions/TermsCondition"

const AppRoutes = () => {

  // Note: One way for maintain user session using cookies redux...!
  // let getUser = useSelector(({ users }) => { return users.authenticatedUser });
  // console.log(getUser);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/FAQ" element ={<FAQ />} />
          <Route path="/PrivacyPolicy" element = {< PrivacyPolicy/>} />
          <Route path="/TermsCondition" element = {<TermsCondition />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default AppRoutes;