import React from 'react';
import Layout from '../components/Layout';
import pic6 from '../assets/images/pic06.jpg';
import pic5 from '../assets/images/pic05.jpg';
import weatherApp from '../assets/images/weather-app.png';
import calApp from '../assets/images/calculater-app.png'

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Projects</h2>
          <p>Check out some of the projects that I have worked on.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <a href="https://www.ochibastudio.com" className="image">
                <img src={pic5} alt="os" />
              </a>
              <h3 className="major">Ochiba Studio</h3>
              <p>
                Ochiba Studio is an e-commerce application designed for
                photographers with extra perks. It was built with HTML/CSS,
                React, JavaScript, NodeJS, PostgreSQL, Redux, Amazon S3, &
                Stripe-checkout. This app allows the admin to communicate to
                their clients and showcase their art of photography. The client
                can also purchase packages to book their photoshoot via
                Stripe-checkout which automatically sends the admin a
                notification of the purchase.
              </p>
              <a
                href="https://github.com/jeffnguyener/ochiba-studio.git"
                className="special"
              >
                Github Repo
              </a>
              <a
                href="https://www.ochibastudio.com/"
                className="special"
              >
                Live site
              </a>
            </article>
            <article>
              <a href="http://157.230.159.89:3333/#/" className="image">
                <img src={pic6} alt="gamified" />
              </a>
              <h3 className="major">Game Train</h3>
              <p>
                Game Train is a group developed project. This application was built with
                HTML/CSS, React, Node.JS, Socket.io, Redux & JavaScript. A game
                designed for professionals to educate in a fun way. The admins
                can utilize tools to load questions and answers then it would
                generate a unique ID for students or people to play and learn.
              </p>
              <a
                href="https://github.com/game-show-wlh5/gamified"
                className="special"
              >
                Github Repo
              </a>
              <a
                href="http://157.230.159.89:3333/#/"
                className="special"
              >
                Live site
              </a>
            </article>
            <article>
            <a href="http://157.230.159.89:3333/#/" className="image">
                <img src={weatherApp} alt="weather" />
              </a>
              <h3 className="major">Weather App</h3>
              <p>
                A weather app project where it displays current weather anywhere around the world. This application was built with
                HTML/CSS, JavaScript and React. I also used Open Weather API to grab the data into the app. This app displays current weather reading in degrees fahrenheit along with icons of the weather, high & lows of the day, wind speeds and humidity by percentage. 
              </p>
              <a
                href="https://github.com/jeffnguyener/weather-app"
                className="special"
              >
                Github Repo
              </a>
            </article>
            <article>
            <a href="http://157.230.159.89:3333/#/" className="image">
                <img src={calApp} alt="calculator" />
              </a>
              <h3 className="major">Calculator App</h3>
              <p>
                A calculator app project where you can do simple mathmathical calculations. This application was built with
                HTML/CSS and Vanilla JavaScript. With this application, you can add, subtract, multiply and divide numerals with a simple click. 
              </p>
              <a
                href="https://github.com/jeffnguyener/calculator-app"
                className="special"
              >
                Github Repo
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
