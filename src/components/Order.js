import React, { Component } from "react";
import Item from "./Item";
import './Order.css'


export default class Order extends Component {
 

  render() {
 
    return (
      <div className="cardCase __container">
        <div className="case_text">
          <h2 className="title">Enjoy our donut boxes...</h2>
          <p>
            Our sets contain delicious combinations of exquisite products for
            your joy and something to please your receptors. Or create your own
            unique set.
          </p>
        </div>
        <div className="card_items">
          {this.props.items.map(el => (
           <Item  key={el.id} item={el} onAdd={this.props.onAdd}/>
          ))}
        </div>
        <div className="order_box">
          <button className="btn_order">Order a box</button>
        </div>
      </div>
    );
  }
}
