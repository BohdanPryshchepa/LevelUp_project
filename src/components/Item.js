import React, { Component } from 'react'
import './Order.css'
export default class Item extends Component {
  render() {
    return (
      <div  className="card">
      <div className="card_img">
        <img src={"./img/"+ this.props.item.img} alt={this.props.item.name} />
        
      </div>
      <div className="card_text">
        <div className="card_title">
          <h4>{this.props.item.name}</h4>
        </div>
        <p className="card_info">{this.props.item.text}</p>
        <div className="offer">
          <p className="price">{this.props.item.price} $</p>
          <button className="to_cart" onClick={()=>this.props.onAdd(this.props.item)}>
          Add to bag
          </button>
        </div>
      </div>
    </div>
    )
  }
}
