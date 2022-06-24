import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/donut_logo.svg'; 
import icon_search from '../img/Icon_search.svg';
import icon_bag from '../img/icon_bag.svg';
import  './Header.css'
import Cart from './Cart';


const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => sum += Number.parseFloat(el.price) );
  return (<div>
    {props.orders.map(el=>(
      <Cart key={el.id} item={el} onDelete={props.onDelete}/>
      ))}
      <p className='sum'>Total: {sum}$</p>
  </div>)
}
const showNothing = () => {
  return(<div className='empty'>
    <h2>Empty</h2>
  </div>)
}

export default function Header (props) {
 
 
    let [cartOpen, setCartOpen] = useState(false)
    return (
      <header className='__container'>
        <div className='menu'>
            <img src={logo} alt="logo"/>
          <nav className="">
            <div className=''>
          <ul className="menu_list">
            {props.navLinks.map (el => (
            <li key={el.index} className='menu_link'>
              <Link to={el.link} className=''>{el.label}
              </Link>
            </li>
))}
       
            </ul>
            </div>
          </nav>
            <div className='icons_header'>
            <img src={icon_search} alt="icon_search"/>
            <img src={icon_bag} alt='icon_bag' onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button${cartOpen && " active"}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length>0 ? 
                showOrders(props)  : showNothing()
              }
              </div>
            )}
            </div>
            
  </div>
 
      </header>
 )
 
 }
