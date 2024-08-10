import React from 'react';
import {Link} from "react-router-dom";
import {GiForkKnifeSpoon} from "react-icons/gi";
import './main.scss'
const Header = () => {
    return (
        <header className='header'>
            <Link to={'/'}>

                    <GiForkKnifeSpoon className='header_icon'/>
            </Link>
        </header>
    );
};

export default Header;
