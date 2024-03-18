import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import '../../Assets/index.css';
import Logo from '../../Assets/Images/logo.png'
import DownloadImage from "../../Assets/Images/download_icon.png";
import User from '../../Assets/Images/user.png';
import { Link } from "react-router-dom";
const Appnavbar = () => {
return (
<>
<div className="topnavbar">
  <Container>
    <Row>
      <Col sm={12} xs={12} md={12} lg={12} xl={12} xxl={12}>
      <div className="logoimg">
        <img src={Logo} className="img-fluid" alt="img" />
      </div>
      </Col>
    </Row>
  </Container>
</div>

<header
  >
  <nav className="navbar navbar-expand-lg navbar-light desired tag">
    <div className="container">
      <div className="navbar-brand">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
          <i className="fa-solid fa-bars" />
          </button>
          <ul className="dropdown-menu">
            <li>
            <Link className="dropdown-item">
            Action
            </Link>
             
            </li>
            <li>
            <Link className="dropdown-item">
            Another action
            </Link>
             
            </li>
            <li>
            <Link className="dropdown-item">
            Something else here
            </Link>
             
            </li>
          </ul>
        </div>
        <div className="vn-red" style={{ textAlign: "center" }}>
        <Link>
          <div className="d_icon">
            <img src={DownloadImage} alt="" />
          </div>
          <span>Download App</span>
          </Link>
      </div>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="index.php">
          Home
          </a>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  data-bs-toggle="modal"
            data-bs-target="#signInformModal">
          
          Videos
          </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  data-bs-toggle="modal"
            data-bs-target="#signInformModal">
              PinBoard
            </Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link"  data-bs-toggle="modal"
            data-bs-target="#signInformModal">
              Watchlist
            </Link>
         
        </li>
        <li className="nav-item">
        <Link className="nav-link"  data-bs-toggle="modal"
            data-bs-target="#signInformModal">
             Companies
            </Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link"  data-bs-toggle="modal"
            data-bs-target="#signInformModal">
             <span>PRO</span>Dashboard
            </Link>
         
        </li>
        <li className="nav-item">
        <Link className="nav-link"  data-bs-toggle="modal"
            data-bs-target="#signInformModal">
             <span>PRO</span>+
            </Link>
          
        </li>
      </ul>
      <div className="nav-btns">
        <li className="nav-item spe">
          <div className="search-box">
            <button className="btn-search">
            <i className="fas fa-search" />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              />
          </div>
        </li>
        <li className="nav-item spe">
        <Link className="nav-link"> <img src={User} alt="" /></Link>
        </li>
        <li className="nav-item spe">
          <button className="nav-link btn_theme">
          Join for FREE
          </button>
        </li>
      </div>
    </div>
    </div>
  </nav>
</header>
<div className="header-2">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  className="dropdown-item" > Action</Link>
              
              </li>
              <li>
              <Link  className="dropdown-item" >   Another action</Link>
               
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
              <Link  className="dropdown-item" >     Something else here</Link>
              
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</>
)
}
export default Appnavbar;