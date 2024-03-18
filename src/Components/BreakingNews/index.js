import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";
import '../../Assets/index.css';
import BreakingImg from "../../Assets/Images/breaking_img1.png";
import Insimg from "../../Assets/Images/lns_img1.png";


const BreakingNews =()=>{
    return(
        <>
         
  <section className="breaking_news_section">
  <div className="container">
    <div className="row align-content-center">
      <div className="col-12 col-lg-7 col-xl-8">
        <div className="breaking_news">
          <h2>Breaking News</h2>
          <h1>Headline goes here...</h1>
          <img className="img-fluid" src={BreakingImg} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.{" "}
          </p>
          <div className="breaking_specs">
            <p>World news</p>
            <p className="dots">•</p>
            <p>12 December 2023</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
        <div className="latest-news-siderbar">
          <div className="lns-head">
            <h3>Latest</h3>
            <h6>
            <Link> Show more <i className="fa-solid fa-arrow-right-long" /></Link>
              
            </h6>
          </div>
          <div className="lns-body">
            <div className="lns-item">
              <div>
                <img className="img-fluid" src={Insimg} alt="" />
              </div>
              <div className="lns-item-right">
                <h4>Impact of New COVID-19 Variants News</h4>
                <div className="lns_specs">
                  <p>World news</p>
                  <p className="dots">•</p>
                  <p className="light_grey">12 December 2023</p>
                </div>
              </div>
            </div>
            <div className="lns-item">
              <div>
                <img className="img-fluid" src={Insimg} alt="" />
              </div>
              <div className="lns-item-right">
                <h4>Impact of New COVID-19 Variants News</h4>
                <div className="lns_specs">
                  <p>World news</p>
                  <p className="dots">•</p>
                  <p className="light_grey">12 December 2023</p>
                </div>
              </div>
            </div>
            <div className="lns-item">
              <div>
                <img className="img-fluid" src={Insimg} alt="" />
              </div>
              <div className="lns-item-right">
                <h4>Impact of New COVID-19 Variants News</h4>
                <div className="lns_specs">
                  <p>World news</p>
                  <p className="dots">•</p>
                  <p className="light_grey">12 December 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="subcribe_container">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6">
          <div className="subc">
            <div className="subc_inner">
              <h1>Subscribe Now</h1>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-6">
          <div className="subc">
            <div className="subc_inner">
              <h1>
                <span>DOWNLOAD</span>
                <br />
                Notes &amp; Notebooks
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}




export default BreakingNews;