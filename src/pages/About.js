import React from 'react';
import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Me</h2>
          <p>"The best way to prepare for life is begin to live"</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Personal Profile</h3>
          <p>
          I have been intrigued in the software development side for years and decided to take action by attending DevMountain to further my skills. I have strong passion in problem solving & learning. I'm always looking for ways to overcome and push myself to be a better developer. On my off time, I enjoy traveling and hikes through national parks around the U.S. with my wife.
          </p>
          <h3 className="major">My Travels</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic1} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
