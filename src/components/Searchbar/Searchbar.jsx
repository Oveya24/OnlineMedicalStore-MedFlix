import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import './Searchbar.css'; // Import the CSS file

export default function Searchbar() {
  return (
    <div className='searchbar-container'>
      <MDBNavbar dark className='black-navbar searchiee'>
        <MDBContainer fluid className='babe'>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input className='form-control' placeholder="Search" aria-label="Search" type='Search' />
            <MDBBtn outline style={{ borderColor: 'green', color: 'white' }}>Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
