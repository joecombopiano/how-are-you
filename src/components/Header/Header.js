import React, { Component } from 'react';
import logo from '../../assets/arivale-logo.png';
import './Header.css';
class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <h1>
                    Just checking in, how are you doing?
                </h1>
                <img src={logo} alt='Logo'/>
            </div>
        );
    }
}
export default Header;