import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/MainPage/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TripList from './components/TripList/TripList';
import Contact from './pages/Contact/Contact';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/tour' element={<TripList />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
