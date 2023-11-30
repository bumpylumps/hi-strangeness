import React from 'react';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  return (
    <section className='navContainer'>
        <section>
            <img src="https://storage.buzzsprout.com/variants/g4yldmb2wth0ptfmlzqyq4old55s/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg" />
        </section>
        <section className='linksContainer'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <HashLink smooth to="/#episodes">Episodes</HashLink>
              </li>
              <li>
                <Link to="">Merch</Link>
              </li>
              <li>
                <Link to="">Patreon</Link>
              </li>
            </ul>
        </section>
    </section>
  )
}

export default Nav

