import React from "react";
import Banner from "../components/banner/banner.component";
import HomeContent from "../components/home-content/home-content.component";
// import Associations from "../components/associations/associations.component";
import HomeProjects from "../components/home-projects/home-projects.component";

import Footer from "../components/footer/footer.component";
import Navbarr from "../components/navbar/navbar.component";

import "./page.styles.scss";
const Home = () => {
  return (
    <div className="home-page">
      <Navbarr />
      <Banner />
      <HomeContent />
      {/* <Associations /> */}
      <HomeProjects />
      <Footer />
    </div>
  );
};

export default Home;
