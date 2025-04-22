import "./App.css";
import icons from "./assets/icons";
import React, { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([false, false, false]);

  const toggleHeart = (index) => {
    const updated = [...favorites];
    updated[index] = !updated[index];
    setFavorites(updated);
  };

  return (
    <>
      <header className="container">
        <img src={icons.logo} alt="" />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
        </ul>
        <img style={{ cursor: "pointer" }} src={icons.search} alt="" />
        <button className="contact">
          <img src={icons.phone} alt="" />
          Contact
        </button>
      </header>

      <main>
        <section className="hero container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "65px" }}
          >
            <h1>
              Dive into Delights Of Delectable{" "}
              <span style={{ color: "#39DB4A" }}>Food</span>
            </h1>
            <p>
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <button className="order">Order now</button>
              <a href="">Watch Video</a>
              <button className="watch">▶</button>
            </div>
          </div>
          <img src={icons.hero} alt="" />
        </section>
        <section className="popular container">
          <h3>Customer Favorites</h3>
          <h2>Popular Categories</h2>
          <div className="cards">
            <div>
              <img src={icons.popular.main} alt="" />
              <h4>Main Dish</h4>
              <p>(86 dishes)</p>
            </div>
            <div>
              <img src={icons.popular.breakfast} alt="" />
              <h4>Break Fast</h4>
              <p>(12 break fast)</p>
            </div>
            <div>
              <img src={icons.popular.desert} alt="" />
              <h4>Dessert</h4>
              <p>(48 dessert)</p>
            </div>
            <div>
              <img src={icons.popular.juice} alt="" />
              <h4>Browse All</h4>
              <p>(255 items)</p>
            </div>
          </div>
        </section>
        <section className="special container">
          <h3>Special Dishes</h3>
          <h2>
            Standout Dishes <br /> From Our Menu
          </h2>
          <div className="standout">
            {[
              {
                img: icons.special.fattoush,
                title: "Fattoush salad",
                price: "24.00",
                rate: "4.9",
              },
              {
                img: icons.special.vegetable,
                title: "Vegetable salad",
                price: "26.00",
                rate: "4.6",
              },
              {
                img: icons.special.egg,
                title: "Egg vegi salad",
                price: "23.00",
                rate: "4.5",
              },
            ].map((item, i) => (
              <div key={i} className="standout_div">
                <div
                  className="heart"
                  onClick={() => toggleHeart(i)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={favorites[i] ? icons.heart.on : icons.heart.off}
                    alt="heart"
                  />
                </div>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>Description of the item</p>
                <ul>
                  <li className="price">
                    <span>$</span>
                    {item.price}
                  </li>
                  <li className="rate">
                    <img src={icons.star} alt="" />
                    {item.rate}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="testimonial container">
          <img style={{ height: "731px" }} src={icons.test} alt="" />
          <div className="testim_div">
            <h3>Testimonials</h3>
            <h2>What Our Customers Say About Us</h2>
            <p>
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </p>
            <div className="feedback">
              <img src={icons.feedback} alt="" />
              <ul>
                <li>
                  <b>Customer Feedback</b>
                </li>
                <li>
                  <img src={icons.star} alt="" />
                  <p>4.9</p>
                  <p>(18.6k Reviews)</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="service container">
          <div className="journey">
            <h3>Our Story & Services</h3>
            <h2>Our Culinary Journey And Services</h2>
            <p>
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <button>Explore</button>
          </div>
          <div className="services">
            <div>
              <img src={icons.services.cater} alt="" />
              <h4>Catering</h4>
              <p>Delight your guests with our flavors and presentation</p>
            </div>
            <div>
              <img src={icons.services.delivery} alt="" />
              <h4>Fast delivery</h4>
              <p>We deliver your order promptly to your door</p>
            </div>
            <div>
              <img src={icons.services.order} alt="" />
              <h4>Online Ordering</h4>
              <p>Explore menu & order with ease using our Online Ordering </p>
            </div>
            <div>
              <img src={icons.services.gift} alt="" />
              <h4>Gift Cards</h4>
              <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
            </div>
          </div>
        </section>
        <section className="footer container">
          <ul>
            <li>
              <img src={icons.logo} alt="" />
            </li>
            <li style={{ lineHeight: "151%" }}>
              Savor the artistry where <br /> every dish is a culinary <br />{" "}
              masterpiece
            </li>
          </ul>
          <ul>
            <li>
              <b>Useful links</b>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <b>Main Menu</b>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Menus</a>
            </li>
            <li>
              <a href="">Reservation</a>
            </li>
          </ul>
          <ul>
            <li>
              <b>Contact Us</b>
            </li>
            <li>
              <a href="">example@email.com</a>
            </li>
            <li>
              <a href="">+64 958 248 966</a>
            </li>
            <li>
              <a href="">Social media</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="container">
        <nav>
          <a href="">
            <div>
              <img src={icons.social.facebook} alt="" />
            </div>
          </a>
          <a href="">
            <div>
              <img src={icons.social.instagram} alt="" />
            </div>
          </a>
          <a href="">
            <div>
              <img src={icons.social.twitter} alt="" />
            </div>
          </a>
          <a href="">
            <div>
              <img src={icons.social.youtube} alt="" />
            </div>
          </a>
        </nav>

        <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          Copyright <img src={icons.copyright} alt="" /> 2023 Dscode | All
          rights reserved
        </p>
      </footer>
    </>
  );
}

export default App;
