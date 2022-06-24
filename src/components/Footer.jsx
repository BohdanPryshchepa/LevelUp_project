import React, { Component } from 'react'
import logo_footer from '../img/donut_footer.svg'; 
import telegram_icon from '../img/telegram_icon.svg';
import insta_icon from '../img/insta_icon.svg';
import viber_icon from '../img/viber_icon.svg';
import face_mass_icon from '../img/face_mass_icon.svg';
import facebook_icon from '../img/facebook_icon.svg';
import './footer1.css'

export default class Footer extends Component {

  render() {
    return (
     <footer >
          <div className='footer  __container'>
            <img src={logo_footer} alt="logo"/>
            <p >© DONUTS CLUB, 2012-2022 ALL RIGHTS RESERVED</p>
            <div className='social' >
                <a href='https://m.facebook.com'><img src={facebook_icon} alt="facebook_icon"/></a>
                <a href='https://m.facebook.com'><img src={face_mass_icon} alt="face_mass_icon"/></a>
                <a href='https://www.instagram.com'><img src={insta_icon} alt="insta_icon"/></a>
                <a href='https://web.telegram.org/'><img src={telegram_icon} alt="telegram_icon"/></a>
                <a href='https://www.viber.com/'><img src={viber_icon} alt="viber_icon"/></a>
            </div>
          </div>
     </footer>
    )
  }
}
