import React from 'react';
import {Link} from 'react-router-dom';

const Header =() => (
    <nav >
        <ul className='left'>
            <li className='App-header'>
                <Link to="/">
                <img src="https://assets-global.website-files.com/656f567f632de4526257bc88/658780f2e0c14e285bc49220_Horizontal%20Logo.svg" alt="vivid-theory-logo">
                </img>
                </Link>
            </li>
        </ul>
        <div className='right'>
           search used tobe here
        </div>
    </nav>
);

export default Header;
