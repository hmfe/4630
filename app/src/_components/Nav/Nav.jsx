import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
    return(
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
            </ul>
        </nav>
    )
}
