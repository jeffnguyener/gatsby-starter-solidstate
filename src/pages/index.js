import React from 'react';

import Layout from '../components/Layout';

import pic9 from '../assets/images/pic09.png';
import pic10 from '../assets/images/pic10.jpg'

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-star fa-spin fa-1x fa-fw"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/About" className="image">
            <img src={pic10} alt="se-logo" />
          </a>
          <div className="content">
            <h2 className="major">Intro</h2>
            <p>
              I have been intrigued in the software development side for years and decided to take action by attending DevMountain to further my skills. I have strong passion in problem solving & learning. I'm always looking for ways to overcome and push myself to be a better developer. 
            </p>
            <a href="/Projects" className="special">
              About Me
            </a>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper alt spotlight style3">
        <div className="inner">
          <a href="/Projects" className="image">
            <img src={pic9} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Knowledge & Skills</h2>
            <p>
              HTML ∙ CSS3 ∙ JavaScript ∙ React ∙ Redux ∙ Node.js ∙ PostgreSQL ∙
              Express.js ∙ Massive.js ∙ Git ∙ Bcrypt ∙ Axios
            </p>
            <a href="/#" className="special">
            My Portfolio
            </a>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
