import React, { Component } from 'react'
import delivery_img from '../img/delivery_img.jpg';
import about_img from '../img/about_img.jpg';
import './About.css'
export default class About extends Component {
  render() {
    return (
      <div className='about __container' id="about_info" >
        <div className=''>
            <div className='about_info'>
                <img src={about_img} alt='about_img'/>
                <div className='about_info_text'>
            <h2 className='title' name='about'>About us</h2>
                    <p>The hist0ory of famous coffee houses began in 1950 when Bill Rosenberg opened his first cafe in Quincy, Massachusetts. And in 1955, the first franchisee of the company received a license. Today, the network's coffee shops operate in 33 countries around the world, serving more than 2.7 million visitors daily.
                    </p>
                    <p>Here you will be offered classic ring donuts - strawberry, lemon, banana, covered with black or white chocolate; shell donuts, the highlight of which are various creams; mouth-watering royal tarts, glazed moti-rings and cake donuts made from chocolate dough.
                    </p>
                </div>
            </div>
        
        
        
        </div>
        <div className='delivery'>
            <div className='delivery_info'>
                <div className='delivery_info_text'>
            <h2 className='title'>We bring joy right to your door</h2>
                  
                      <p>It is extremely easy to please your colleagues, congratulate your boss on the anniversary, or just organize a tasty and satisfying snack to the office - just order donuts by phone or arrange delivery on the DONATS CLUB website, and we will bring them warm to the address!
                      </p>
                      <p>You can choose one of the proposed sets, which include several types of donuts, or create a set yourself - for this you need to make a note in the order, and the company's employees will definitely do everything exactly. You can even pick up a real assortment - a box of donuts of various flavors, the DONATS CLUB assortment provides a huge selection!
                      </p>
                   
                </div>
                <img src={delivery_img} alt='delivery_img'/>
            </div>
        
        
        
        </div>
        <hr className='about_hr'/>
        
      </div>
    )
  }
}
