import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import RentalHousePage from "./components/RentalHousePage/RentalHousePage.jsx";
import VisaPage from "./components/VisaPage/VisaPage.jsx";
import RentalTransportPage from "./components/RentalTransportPage/RentalTransportPage.jsx";
import TourTaiPage from "./components/TourTaiPage/TourTaiPage.jsx";
import CardsAndLicensePage from "./components/CardsAndLicensePage/CardsAndLicensePage.jsx";
import ServicesPage from "./components/ServicesPage/ServicesPage.jsx";
import ToursAndExcoursionsPage from "./components/ToursAndExcoursionsPage/ToursAndExcoursionsPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/house" element={<RentalHousePage />} />
                <Route path="/visa" element={<VisaPage />} />
                <Route path="/transport" element={<RentalTransportPage />} />
                <Route path="/tour" element={<TourTaiPage />} />
                <Route path="/cards" element={<CardsAndLicensePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/excursions" element={<ToursAndExcoursionsPage />} />
            </Routes>
        </Router>
    );
}

export default App;