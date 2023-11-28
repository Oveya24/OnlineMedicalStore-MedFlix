import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      
      <Navbar  className='daisy' style={{backgroundColor:'green'}}>
        <Container class="navc">
          <img src="https://img.freepik.com/free-vector/medical-equipments-pills-white-background_1308-43344.jpg?size=626&ext=jpg&ga=GA1.1.19472705.1700452875&semt=ais" width={'30px'} height={'30px'} style={{marginRight:'20px'}} alt='--MEDFLIX--'></img>
          <Navbar.Brand href="#home" style={{color:'white'}}>MEDFLIX</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft: '70%'}}>
            <Link to='/' style={{color:'white' , paddingLeft:'10px'}}>Home</Link> 
            <Link to='/feat' style={{color:'white' , paddingLeft:'10px'}}>Features</Link>
            <Link to='/cart' style={{color:'white' , paddingLeft:'10px'}}>CART</Link>
            <Link to='/login' style={{color:'white' , paddingLeft:'10px'}}>Login</Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;