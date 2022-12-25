import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Info from "../../components/information/Info";
import LinkShortener from "../../components/shortener/LinkShortener";

function Home() {
  return (
    <>
      <Hero />
      <LinkShortener />
      <Info />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
