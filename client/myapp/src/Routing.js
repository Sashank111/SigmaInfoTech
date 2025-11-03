import { Routes, Route } from 'react-router-dom';

// Inner Pages
import Mainpage from './InnerPages/Mainpage';
import AboutUs from './InnerPages/AboutUs';
import Services from './InnerPages/Services';
import SubServices from './InnerPages/SubServices';
import BookService from './InnerPages/BookServices';
import ContactUs from './InnerPages/ContactUs.jsx';
import Offers from './InnerPages/Offers';

// Admin Pages
import Admin from './Admin/Admin.js';
import ForgotPassword from './Admin/ForgotPassword.js';
import CreateAccount from './Admin/CreateAccount.js';
import AdminDashboard from './Admin/AdminDashboard.js';

// Service CRUD
import AddService from './Admin/AddService.js';
import DeleteService from './Admin/DeleteService.js';
import EditService from './Admin/EditService.js';

// SubService CRUD
import AddSubService from './Admin/AddSubService.js';
import DeleteSubService from './Admin/DeleteSubService.js';
import EditSubService from './Admin/EditSubService.js';

// Offers CRUD
import AddOffers from './Admin/AddOffers.js';
import DeleteOffers from './Admin/DeleteOffers.js';
import EditOffers from './Admin/EditOffers.js';

// Booking Data
import BookServiceData from './Admin/BookServiceData.js';

const Routing = () => {
    return (
        <div style={{ minHeight: '82vh', overflowX: 'hidden' }}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Mainpage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route
                    path="/subservice/:sid/:sname"
                    element={<SubServices />}
                />
                <Route path="/bookservice" element={<BookService />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/offers" element={<Offers />} />

                {/* Admin Auth Routes */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/createAccount" element={<CreateAccount />} />

                {/* Admin Dashboard */}
                <Route path="/adminDashboard" element={<AdminDashboard />}>
                    {/* Service Management */}
                    <Route path="" element={<AddService />} />
                    <Route path="deleteservice" element={<DeleteService />} />

                    {/* SubService Management */}
                    <Route path="addsubservice" element={<AddSubService />} />
                    <Route
                        path="deletesubservice"
                        element={<DeleteSubService />}
                    />

                    {/* Offer Management */}
                    <Route path="addoffers" element={<AddOffers />} />
                    <Route path="deleteoffers" element={<DeleteOffers />} />

                    {/* Booking Management */}
                    <Route
                        path="bookservicedata"
                        element={<BookServiceData />}
                    />
                </Route>

                {/* Edit Pages (Outside Dashboard for Dynamic IDs) */}
                <Route path="/editservice/:sid" element={<EditService />} />
                <Route
                    path="/edit-subservice/:sid"
                    element={<EditSubService />}
                />
                <Route path="/editoffer/:id" element={<EditOffers />} />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={
                        <h1 style={{ textAlign: 'center' }}>404 Not Found</h1>
                    }
                />
            </Routes>
        </div>
    );
};

export default Routing;
