import React from 'react';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  return (
    <section className='navContainer'>

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

