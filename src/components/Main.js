import "../styles/Main.css";
import dish1 from '../assets/greek salad.jpg';
import dish2 from '../assets/bruchetta.svg';
import dish3 from '../assets/lemon dessert.jpg';


function Main() {

  return (
    <main className="main-content">
      <div className="container">
        <h2>This week specials!</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>

      <div className="cards-container">
        <div className="card">
          <img src={dish1} alt="Greek Salad" />
          <div className="card-title">
            <div className="dish-nameprice">
              <h4 className="dish-name">Greek Salad</h4>
              <h4 className="dish-price">$12.49</h4>
            </div>
          </div>
          <p className="dish-description">
            The Famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </p>
          <button className="order-delivery-btn">Order a delivery</button>
        </div>
        <div className="card">
          <img src={dish2} alt="Bruchetta" />
          <div className="card-title">
            <div className="dish-nameprice">
              <h4 className="dish-name">Bruchetta</h4>
              <h4 className="dish-price">$10.49</h4>
            </div>
          </div>
          <p className="dish-description">
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
          </p>
          <button className="order-delivery-btn">Order a delivery</button>
        </div>
        <div className="card">
          <img src={dish3} alt="Lemon Dessert" />
          <div className="card-title">
            <div className="dish-nameprice">
              <h4 className="dish-name">Lemon Dessert</h4>
              <h4 className="dish-price">$8.49</h4>
            </div>
          </div>
          <p className="dish-description">
            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button className="order-delivery-btn">Order a delivery</button>
        </div>
      </div>
    </main>
  )
}

export default Main
