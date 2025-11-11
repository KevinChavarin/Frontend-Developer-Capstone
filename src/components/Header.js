import '../styles/Header.css';
import image from '../assets/restauranfood.jpg';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <h1 className='ll-title'>Little Lemon</h1>
        <h3 className='header-location'>Chicago</h3>
        <p className='header-description'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className='reserve-btn'>Reserve a Table</button>
      </div>
      <div>
        <img src={image} className="restaurant-image" alt="Restaurant Food" />
      </div>
    </header>
  );
}

export default Header;
