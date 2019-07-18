import React from 'react';
import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';


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
          On my off time, I enjoy traveling around the world and hikes through national parks around the U.S. with my wife. 
          </p>
          <h3 className="major">My Travels</h3>
          <p>
            Here are some of my favorite destinations I have travelled to. 
          </p>

          <section className="features">
          <article>
              <a href="/#" className="image">
                <img src={pic3} alt="" />
              </a>
              <h3 className="major">Deligate Arch</h3>
              <p>
                Recently I went to Arches National Park and hiked to the Deligate Arch. The hike was short but intense. 
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic1} alt="" />
              </a>
              <h3 className="major">Colliseum</h3>
              <p>
                Got a chance to visit Rome and saw how big the historical Colliseum was. It's amazing seeing this in person.
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic2} alt="" />
              </a>
              <h3 className="major">Eiffel Tower</h3>
              <p>
                My wife and I visited Paris and did a short photo shoot right off the Pont de Bir-Hakeim. This was one of my favorite places I've travelled so far.  
              </p>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Observation Point</h3>
              <p>
                This was quite a hike but I hiked 6508 feet up to Observation Point in Zion National Park. Can't wait to go back to hike the other trails in this national park.
              </p>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
