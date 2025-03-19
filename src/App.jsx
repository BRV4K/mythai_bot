import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import EstatePage from "./components/EstatePage.jsx";
import VisaPage from "./components/VisaPage.jsx";
import RentalTransportPage from "./components/TransportPage.jsx";
import ChangeMoneyPage from "./components/ChangeMoneyPage.jsx";
import CardsAndLicensePage from "./components/CardsAndLicensePage.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import ToursAndExcoursionsPage from "./components/ToursAndExcoursionsPage.jsx";
import DisctrictChange from "./components/DisctrictChange.jsx";
import EstateCatalog from "./components/EstateCatalog.jsx";
import VisaVariants from "./components/VisaVariants.jsx";
import TransportCatalog from "./components/TransportCatalog.jsx";
import FastTrack from "./components/FastTrack.jsx";
import BorderRun from "./components/BorderRun.jsx";
import BankCardsPage from "./components/BankCardsPage.jsx";
import DrivingLicensePage from "./components/DrivingLicensePage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/estate" element={<EstatePage />} />
                <Route path="/visa" element={<VisaPage />} />
                <Route path="/transport" element={<RentalTransportPage />} />
                <Route path="/tour" element={<ChangeMoneyPage />} />
                <Route path="/cards" element={<CardsAndLicensePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/excursions" element={<ToursAndExcoursionsPage />} />
                <Route path="/districtChange" element={<DisctrictChange />} />
                <Route path="/estateCatalog" element={<EstateCatalog />} />
                <Route path="/visaVariants" element={<VisaVariants />} />
                <Route path="/transportCatalog" element={<TransportCatalog />} />
                <Route path="/fastTrack" element={<FastTrack />} />
                <Route path="/borderRun" element={<BorderRun />} />
                <Route path="/bankCards" element={<BankCardsPage/>} />
                <Route path="/drivingLicense" element={<DrivingLicensePage/>} />
            </Routes>
        </Router>
    );
}

export default App;