import React from 'react';
import {Link} from 'react-router-dom';

const Header =() => (
    <nav >
        <ul className='navigation'>
            <li className='App-header'>
                <Link to="/">
                    <img src="https://assets-global.website-files.com/656f567f632de4526257bc88/658780f2e0c14e285bc49220_Horizontal%20Logo.svg" alt="vivid-theory-logo">
                </img>
                </Link>
            </li>
            <li>
                <Link to="/all-blogs">All Blogs</Link>
            </li>
            <li>
                <Link to="/create">Add Blog</Link>
            </li>
        </ul>
    </nav>
);

export default Header;
