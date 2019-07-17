import React from 'react';

import Layout from '../components/Layout';

import pic6 from '../assets/images/pic06.jpg';
import pic5 from '../assets/images/pic05.jpg';

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
                href="https://www.ochibastudio.com"
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
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
