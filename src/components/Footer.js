import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        {/* <p>
         
        </p> */}
        {/* <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form> */}
        <ul className="contact">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <div className="name">{name}</div>
                <a href={url}>{name}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
