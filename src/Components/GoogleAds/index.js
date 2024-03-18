import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../Assets/index.css';
import Container from 'react-bootstrap/Container';
import GoogelAds from "../../Assets/Images/google_ads.png";


const GoogleAds =()=>{
    return(
        <>
               <div className="googeladssec">
                <Container>
                    <div className="google_ads_inner">
                        <div className="g_ads">
                            <img src={GoogelAds} className="img-fluid" alt="ads" />
                        </div>
                        <div className="g_ads">
                            <h2>Banner here...</h2>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}



export default GoogleAds;