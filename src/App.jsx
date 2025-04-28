import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import ServicesCardList from "./components/ServicesCardList";
import NewsCardList from "./components/NewsCardList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Header />
        <Main />
        <About />
        <ServicesCardList />
        <NewsCardList />
        <Footer />
      </div>
    </>
  );
};

export default App;
