import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer.jsx";
import Layout from "./components/layout";
import About from "./components/About";
import Content from './components/Content.jsx'; // Include the extension if necessary
import Destination from "./components/Destination";
import Agency from "./components/Agency";
import Contact from "./components/Contact.jsx";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} /> 
                <Route path="/Header" element={<Header />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/About" element={<Layout><About /></Layout>} />
                <Route path="/Content" element={<Layout><Content /></Layout>} />
                <Route path="/Destination" element={<Layout><Destination /></Layout>} />
                <Route path="/Agency" element={<Layout><Agency /></Layout>} />
                <Route path="/Contact" element={<Layout><Contact /></Layout>} />
                <Route path="/Login" element={<Login/> } />
                <Route path="/SignUp" element={<SignUp/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
