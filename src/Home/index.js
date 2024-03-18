import React from "react";
import Appnavbar from "../Components/Appnavbar";
import BreakingNews from "../Components/BreakingNews";
import PoliticsSection from "../Components/PoliticsSection";
import USinMinutes from "../Components/Blog";
import EnvironmentalProtectionRevolution from "../Components/EnvironmentalProtectionRevolution";
import SocailAds from "../Components/SocailAds";
import Footer from "../Components/Footer";




const Home =()=>{
    return(
        <>
        <Appnavbar/>
        <BreakingNews/>
        <PoliticsSection/>
        <USinMinutes/>
        <EnvironmentalProtectionRevolution/>
        <SocailAds/>
        <Footer/>
        </>
    )
}


export default Home;