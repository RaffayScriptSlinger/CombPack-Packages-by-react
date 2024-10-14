import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Layout from "./components/layout.jsx";
import About from "./components/About.jsx";
import Content from './components/Content.jsx';
import Destination from "./components/Destination.jsx";
import Agency from "./components/Agency.jsx";
import Contact from "./components/Contact.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Camping from "./components/TourDetails/Camping.jsx";
import Hiking from "./components/TourDetails/Hiking.jsx";
import MountainBike from "./components/TourDetails/MountainBike.jsx";
import Fishing from "./components/TourDetails/Fishing.jsx";
import TourLayout from "./components/TourDetails/TourLayout.jsx";
import Cart from "./components/TourDetails/cart.jsx";



function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/Header" element={<Header />} />
                <Route path="/About" element={<Layout><About /></Layout>} />
                <Route path="/Content" element={<Layout><Content /></Layout>} />
                <Route path="/Destination" element={<Layout><Destination /></Layout>} />
                <Route path="/Agency" element={<Layout><Agency /></Layout>} />
                <Route path="/Contact" element={<Layout><Contact /></Layout>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/TourDetails/Camping" element={<TourLayout><Camping /></TourLayout>} />
                <Route path="/TourDetails/Hiking" element={<TourLayout><Hiking /></TourLayout>} />
                <Route path="/TourDetails/MountainBike" element={<TourLayout><MountainBike /></TourLayout>} />
                <Route path="/TourDetails/Fishing" element={<TourLayout><Fishing /></TourLayout>} />
                <Route path="/cart" element={<Cart />} /> {/* Cart Route */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
