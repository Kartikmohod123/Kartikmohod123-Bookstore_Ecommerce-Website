import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import BooksPage from './pages/book.jsx';
import ContactPage from './pages/contact.jsx';
import LoginPage from './pages/login.jsx';
import AboutPage from './pages/about.jsx';
import NavigationBar from './components/navbar.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import AdminLoginPage from './pages/admin.jsx';
import SignupPage from "./pages/usersignup.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
            <div className="d-flex flex-column min-vh-100">
                <Header/>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/admin" element={<AdminLoginPage />} />
                </Routes>
                <Footer />
                <ToastContainer />
            </div>
    );
};

export default App;