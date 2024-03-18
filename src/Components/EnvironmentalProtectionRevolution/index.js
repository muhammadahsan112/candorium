import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import EnirmentalImg from "../../Assets/Images/envirn_img1.png";
import HighLights from "../../Assets/Images/env_high1.png";
import HighLights1 from "../../Assets/Images/env_high2.png";


const EnvironmentalProtectionRevolution =()=>{
    return(
        <>
 <section className="environmental_section">
  <div className="container">
    <div className="row">
      <div className="col-7">
        <div>
          <img className="img-fluid" src={EnirmentalImg} alt="" />
        </div>
      </div>
      <div className="col-5">
        <div className="env_right">
          <div>
            <h1>
              Environmental <br />
              Protection Revolution
            </h1>
            <p>
              A leading technology company has announced its latest innovation
              in waste management systems that reduces the amount of waste
              entering landfills by as much as 50%. This new system uses
              advanced processing technology to recycle various types of waste
              that were previously difficult to recycle.
            </p>
            <p>
              According to a statement from the company's CEO, this technology
              is a historical milestone in environmental protection efforts. By
              utilizing more efficient recycling processes.
            </p>
          </div>
          <div>
            <p className="er_p">Sumber: Media.com , September, 05 2023</p>
          </div>
        </div>
        <h1 />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-11">
        <div className="env_highlights">
          <div className="row">
            <div className="col-6">
              <div className="env_h_item border1">
                <div>
                  <img
                    className="img-fluid"
                    src={HighLights}
                    alt=""
                  />
                </div>
                <div>
                  <h3>British Government Agrees Final Trade Deal</h3>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="env_h_item">
                <div>
                  <img
                    className="img-fluid"
                    src={HighLights1}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Leading Women Podcast Highlights Women's</h3>
                </div>
              </div>
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




export default EnvironmentalProtectionRevolution;