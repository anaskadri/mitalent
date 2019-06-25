import React, { Component } from 'react';
import logo from '../assets/img/Logo.png';
import HamburgerMenu from './HamburgerMenu'

class TopHeader extends React.Component {
    constructor (props) {
        super(props);
    }   

    
render () {
    return (
        <div className="TopHeader">
            <div className="TopHeaderMenu">
                <div className="Menu">
                    <HamburgerMenu />
                </div>
                <div className="TopHeaderMenuClients"><a href="#">CLIENTS</a></div>
                <div className="TopHeaderMenuNews"><a href="#">NEWS</a></div>
            </div>

            <div className="TopHeaderLogo">
                <img src={logo} alt={logo} />
            </div>
 
            <div className="TopHeaderSearch">
                <form id="TopHeaderSearchBar">
                    <input type="search" placeholder="Search" />
                </form>
            </div>
        </div>
    );}
} 

export default TopHeader;