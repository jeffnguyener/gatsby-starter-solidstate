import React from 'react';
import Layout from '../components/Layout';
import pic6 from '../assets/images/pic06.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic11 from '../assets/images/pic11.png';
import cwpp from '../assets/images/cwpp.png';

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
              <a href="https://xd.adobe.com/view/b0ef7c76-77d8-4b17-926e-715fda7649f8-e5bc/" className="image">
                <img src={pic11} alt="usah1" />
              </a>
              <h3 className="major">USA Outlook Access Request</h3>
              <p>
                <b>Brief Project Description</b><br></br>
                Currently, the USA Health Security Team manually manages which users in their system have access to shared mail inboxes and shared calendars as well as the level of permissions they are allowed. Typically, a user would reach out to an administrator and request access to a specific inbox or calendar, the administrator would then run the powershell commands that would give the user the necessary permissions and the level of access that they choose. The process proves to be very repetitive to the administrator. The project aims to automate this process by instead of  having the user reach out directly to the administrator, they would simply use a web application to request permissions. From this application, they would request select to request to either a mailbox or a calendar then if it is approved, a powershell command script within the application will run and provide the user the requested permissions.
              </p>
              <a
                href="https://xd.adobe.com/view/b0ef7c76-77d8-4b17-926e-715fda7649f8-e5bc/"
                className="special"
              >
                Adobe XD Prototype
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
              <a href="https://xd.adobe.com/view/bd2309ff-61bc-428e-b6e2-1f47d8f1c04c-e870/" className="image">
                <img src={cwpp} alt="cwpp" />
              </a>
              <h3 className="major">Children's & Women's NICU Patient Portal</h3>
              <p>
                <b>Brief Project Description</b><br></br>
                The USA Health Children's and Women's Hospital NICU patient portal is a secure online application that allows parents and guardians of infants in the NICU to access their child's medical information. The NICU team wanted a platform that would allow parents/guardians to access their child's medical information, important resources of being a new parent/guardian and a way to sign up for classes to learn about caring for their child.
              </p>
              <a
                href="https://nicu.usahealthsystem.com/"
                className="special"
              >
                Adobe XD Prototype
              </a>
            </article>
           </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
