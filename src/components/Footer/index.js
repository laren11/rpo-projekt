import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left bottom'>
      <MDBContainer className='p-4'>
        <MDBRow >
          <MDBCol  lg='12' md='12' className='mb-4 mb-md-0' style={{color: 'white'}}>
            <h5 className='text-uppercase'>Thank You!</h5>

            <p>
              Thank you for playing our game that we worked hard for. We hope you had fun
              and will come back to us soon.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://mdbootstrap.com/'>
          SideScroller.com
        </a>
      </div>
    </MDBFooter>
  );
}