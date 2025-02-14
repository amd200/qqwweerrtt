import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import darkModeAction from './redux/actions/darkModeAction'
function MyNav()  {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeTab, setActiveTab] = useState(currentPath);
  const navigate = useNavigate();
  const theme = useSelector((state) => state.darkModeReducer.theme); // Adjust this if your state shape is different
  const dispatch = useDispatch()
  const navHome = () =>{
    navigate('/')
    setActiveTab('/')
  }
  const navQuran = () =>{
    navigate('/quran')
    setActiveTab('/quran')
  }
  const navSlah = () =>{
    navigate('/slah')
    setActiveTab('/slah')
  }
  const navAzkar = () =>{
    navigate('/azkar')
    setActiveTab('/azkar')
  }
  const navRadio = () =>{
    navigate('/radio')
    setActiveTab('/radio')
  }
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={navHome} className="fw-bold logo">فردوس</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link 
                  onClick={navQuran} 
                  className={'navListItem' + ' ' + (activeTab === '/quran' ? 'active' : '')}>
                  قرآن
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  onClick={navSlah} 
                  className={'navListItem' + ' ' + (activeTab === '/slah' ? 'active' : '')}>
                  مواقيت الصلاة
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  onClick={navAzkar} 
                  className={'navListItem' + ' ' + (activeTab === '/azkar' ? 'active' : '')}>
                  الأذكار
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  onClick={navRadio} 
                  className={'navListItem' + ' ' + (activeTab === '/radio' ? 'active' : '')}>
                  الراديو
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button onClick={()=>{
                    dispatch(darkModeAction(theme))
                }}>
                  dark
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }


export default MyNav;