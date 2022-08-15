import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from "../Navigation"
import QuestionsHomePage from '../QuestionsHomePage';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
import AboutPage from '../About';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Routes>
        <Route exact path={ROUTES.QUESTIONS_HOME} element={<QuestionsHomePage/>} />
        <Route path={ROUTES.ABOUT} element={<AboutPage/>} />
      </Routes>
    </div>
  </Router>
);

export default App;