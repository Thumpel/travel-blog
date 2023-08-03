import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Header/Header";
import Main from "./pages/MainPage/Main";
import Dublin from "./pages/DublinPage/Dublin";
import Pubs from "./pages/BestPubs/Pubs"
import Cities from "./pages/AnotherCities/Cities"
import HistoryGuiness from "./pages/HistoryOfGuiness/HistoryGuiness";
import HistotyIreland from "./pages/HistotyIreland/HistoryIreland"
// import FormData from "./Components/Form/FormData";
import MakeTrip from "./Components/MakeTrip/MakeTrip";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/dublin" element={<Dublin/>}/>
          <Route path="/pubs" element={<Pubs/>}/>
          <Route path="/another_cities" element={<Cities/>}/>
          <Route path="/history_guiness"element={<HistoryGuiness/>}/>
          <Route path="/histoty_ireland"element={<HistotyIreland/>}/>
          {/* <Route path="/form"element={<FormData/>}/> */}
          <Route path="/trip"element={<MakeTrip/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
