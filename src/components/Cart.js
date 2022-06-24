import React, { Component } from 'react'
import { FaTrash} from "react-icons/fa"
export class Cart extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/"+ this.props.item.img} alt={this.props.item.name} />
          <h4>{this.props.item.name}</h4>
          <p className="price">{this.props.item.price} $</p>
          <FaTrash className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Cart