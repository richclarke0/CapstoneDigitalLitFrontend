import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBInputGroup
} from 'mdb-react-ui-kit';


import * as ROUTES from '../constants/routes'

const Navigation = () => {
  const [showBasic, setShowBasic] = useState(false);
  const location = useLocation()
  return (
    <div>
      {/* <Link to={ROUTES.QUESTIONS_HOME}>All Questions</Link>
      <Link to={ROUTES.ABOUT}>About</Link> */}

      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>DLT</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/'>
                  All Questions
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/easy'>Easy</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/medium'>Medium</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/hard'>Hard</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>

              {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
};

export default Navigation;
