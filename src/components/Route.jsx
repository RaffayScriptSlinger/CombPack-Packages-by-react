import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from './Footer.jsx'; // Include the extension if necessary
import Layout from "./layout.jsx";
import About from "./About.jsx";
import Content from './Content.jsx'; // Include the extension if necessary
import Destination from "./Destination.jsx";
import Agency from "./Agency.jsx";
import Contact from "./Contact.jsx";
import SignUp from "../pages/SignUp.jsx";
import Login from "../pages/Login.jsx";


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
