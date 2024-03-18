import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
<>
 <section className="footer-sec">
  <div className="container">
    <div className="row">
      <div className="col-4">
        <div className="foot-inner ft">
          <div className="logo-foot">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <h5>Our Contact</h5>
          <ul>
            <li>
            <Link>
            <span>
                  <i className="fa-solid fa-phone" />
                </span>
                123 456 7890
            </Link> 
            </li>
            <li>
            <Link>
                <span>
                  <i className="fa-solid fa-envelope" />
                </span>
                info@candorium.com
                </Link> 
            </li>
          </ul>
        </div>
      </div>
      <div className="col-4">
        <div className="foot-inner">
          <div className="row">
            <div className="col-1" />
            <div className="col-5">
              <h5>Quick Links</h5>
              <ul>
                <li>
                 <Link>About Us</Link>
                
                </li>
                <li>
                <Link> Contact</Link>
                
                </li>
                <li>
                <Link>Privacy policy</Link>
                 
                </li>
                <li>
                <Link>Subcription</Link>
              
                </li>
              </ul>
            </div>
            <div className="col-1" />
            <div className="col-5">
              <h5>Categories</h5>
              <ul>
                <li>
                <Link>USinMinutes</Link>
                
                </li>
                <li>
                <Link> Bussiness</Link>
                
                </li>
                <li>
                <Link> Economy</Link>
                
                </li>
                <li>
                <Link> Industry</Link>
                 
                </li>
                <li>
                <Link> Politics</Link>
                  
                </li>
                <li>
                <Link> Trending</Link>
                
                </li>
                <li>
                <Link> Term Of Use</Link>
                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="foot-inner ft">
          <h5>Our Offices</h5>
          <ul>
            <li>
              <h5 className="ft_last">Califonia - Costa Mesa</h5>
            </li>
            <li className="ft_last_">
              555 Anton Blvd, Costa Mesa,
              <br />
              CA 92626
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}



export default Footer;