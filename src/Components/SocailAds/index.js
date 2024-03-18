import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import AddImg from "../../Assets/Images/ads_s1.png";


const SocailAds =()=>{
    return(
        <>
  <section className="ads_slides_section">
  <div className="container">
    <div className="row">
      <div className="col-4">
        <div className="as_item">
          <div>
            <img className="img-fluid" src={AddImg} alt="" />
          </div>
          <div>
            <h6>Advertisement goes here... Ads goes here...</h6>
            <div className="lns_specs">
              <p>World news</p>
              <p className="dots">•</p>
              <p className="light_grey">12 June 0000, 12.15 WIB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="as_item">
          <div>
          <img className="img-fluid" src={AddImg} alt="" />
          </div>
          <div>
            <h6>Advertisement goes here... Ads goes here...</h6>
            <div className="lns_specs">
              <p>World news</p>
              <p className="dots">•</p>
              <p className="light_grey">12 June 0000, 12.15 WIB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="as_item">
          <div>
          <img className="img-fluid" src={AddImg} alt="" />
          </div>
          <div>
            <h6>Advertisement goes here... Ads goes here...</h6>
            <div className="lns_specs">
              <p>World news</p>
              <p className="dots">•</p>
              <p className="light_grey">12 June 0000, 12.15 WIB</p>
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



export default SocailAds;