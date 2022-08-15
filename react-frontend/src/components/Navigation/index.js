import React from 'react';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
import { Grid, Cell, Menu, MenuItem } from "react-foundation";

const Navigation = () => (
 
  <Menu>
    <MenuItem><Link to={ROUTES.SIGN_IN}>Sign In</Link></MenuItem>
    <MenuItem><Link to={ROUTES.LANDING}>Landing</Link></MenuItem>
    <MenuItem><Link to={ROUTES.HOME}>Home</Link></MenuItem>
    <MenuItem><Link to={ROUTES.ACCOUNT}>Account</Link></MenuItem>
    <MenuItem><Link to={ROUTES.ADMIN}>Admin</Link></MenuItem>
  </Menu>
);

export default Navigation;
