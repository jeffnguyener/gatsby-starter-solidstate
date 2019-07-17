import React from 'react';

import Layout from '../components/Layout';

import pic9 from '../assets/images/pic09.png';


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
          <a href="/Projects" className="image">
            <img src={pic9} alt="se-logo" />
          </a>
          <div className="content">
            <h2 className="major">Skills</h2>
            <p>
            HTML ∙ CSS3 ∙ JavaScript ∙ React ∙ Redux ∙ Node.js ∙ PostgreSQL ∙ Express.js ∙ Massive.js ∙ Git ∙ Bcrypt ∙ Axios
            </p>
            <a href="/Projects" className="special">
              My Portfolio
            </a>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
