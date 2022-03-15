import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./Item";
import FirstPage from "./Pages/FirstPage";
import Header from "./Pages/Header";

import SecondPage from "./Pages/SecondPage";
import ThreePage from "./Pages/ThreePage";
import "./styles.css";



const breakPoints = [
  { width: 10240, itemsToShow: 1 },
  { width: 25000, itemsToShow: 2 },
  { width: 30000, itemsToShow: 3 },
  { width: 35000, itemsToShow: 4 },
];

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="App">
        <div className="app-wrapper">
          
          <div className="header" >
            
            <div className="button-header">
              <button className="home" onClick='location.reload();return false'><Header /> </button>
            </div>

          </div>

          <div className="main-content">

            


              <Carousel breakPoints={breakPoints}>
                <Item  ><FirstPage /></Item>
                <Item><SecondPage /></Item>
                <Item><ThreePage /></Item>
              </Carousel>

           
          </div>

        </div>

      </div>

    </BrowserRouter>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
