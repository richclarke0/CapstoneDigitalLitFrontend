import React from 'react';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import { Grid, Cell, Menu, MenuItem } from "react-foundation";

const Navigation = () => (
 
  <Menu>
    <MenuItem><Link to={ROUTES.QUESTIONS_HOME}>All Questions</Link></MenuItem>
    <MenuItem><Link to={ROUTES.ABOUT}>About</Link></MenuItem>
  </Menu>
);

export default Navigation;
