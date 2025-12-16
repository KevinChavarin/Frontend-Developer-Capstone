import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Booking from './pages/BookingPage';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
