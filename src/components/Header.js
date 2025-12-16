import '../styles/Header.css';
import image from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <h1 className='ll-title'>Little Lemon</h1>
        <h3 className='header-location'>Chicago</h3>
        <p className='header-description'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link className='reserve-btn' to="/booking">Reserve a Table</Link>
      </div>
      <div>
        <img src={image} className="restaurant-image" alt="Restaurant Food" />
      </div>
    </header>
  );
}

export default Header;
