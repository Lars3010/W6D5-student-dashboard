import React from 'react'
import Logo from '../assets/cropped-logoglat-small.png';

function Header(){
    return(
        <header>
            <img src={Logo} alt="Winc Academy Logo"/>
        </header>
    )
}

export default Header;