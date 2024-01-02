import React from 'react';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import headerLogo  from '../images/header-logo.JPG'

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
                <img src={ headerLogo } alt="High strangeness title in graphic font"/>
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

