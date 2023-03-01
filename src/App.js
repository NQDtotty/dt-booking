import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/MainPage/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TripList from './components/TripList/TripList';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Profile from './components/Profile/Profile'
import HistoryTicket from './components/Ticket/HistoryTicket'
import ChangePassword from './components/Profile/ChangePassword';
import BuyTicket from './pages/BuyTicket/BuyTicket';
import Success from './pages/BuyTicket/Success';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "AddU57tauCNjWXZ0ps1h-1V9gQxTBCkqxthJMK-GEDqMu-DGOInDrugVNAd69Qtcbeqb-_aPHzXe48u-",
            }}
        >
            <div className="App">
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/tour' element={<TripList />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path='/user' element={<Profile />}></Route>
                        <Route path='/historyTicket' element={<HistoryTicket />}></Route>
                        <Route path='/password' element={<ChangePassword />}></Route>
                        <Route path='/buyTicket' element={<BuyTicket />}></Route>
                        <Route path='/buyTicketSuccess' element={<Success />}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer></Footer>
            </div>
        </PayPalScriptProvider>
    );
}

export default App;
