import Header from "./components/Header";
import Order from "./components/Order";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Footer from "./components/Footer";
import SetInBox from "./components/SetInBox";
import React from "react";
import { Route, Switch } from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      menu :[
       { link: "/", label: "Menu" },
       { link: "/", label: "About US" },
       {
         link: "/",
         label: "Location",
       },
       {
         link: "/setInBox",
         label: "Set in Box",
       },
     ],
     donuts : [
      {
        id: 1,
        name: "Сhocolate heaven",
        text: "With chocolate filling",
        price: 2,
        img: "card_choco_donut.png",
      },
      {
        id: 2,
        name: "Cloud Atlas",
        text: "drown in the cloud",
        price: 2,
        img: "card_white_donut.png",
      },
      {
        id: 3,
        name: "Pink castle",
        text: "for little princesses",
        price: 2,
        img: "card_pink_donut.png",
      },
      {
        id: 4,
        name: "Blue Lagoon",
        text: "freshness of the ocean",
        price: 2,
        img: "card_blue_donut.png",
      }
    ],
    orders:[]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }

render() {
  return (
    <div className="wrapper">
      <Header navLinks={this.state.menu} orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Switch>
      <Route exact path ='/'>
          <Showcase/>
          <Order items={this.state.donuts} onAdd={this.addToOrder}/>
          <About/>
      </Route>
      <Route path='/setInBox' component={SetInBox}/>
    </Switch>
  
      <Footer />
    </div>
  );
}
deleteOrder(id){
this.setState({orders:this.state.orders.filter(el=>el.id !==id)})
}
addToOrder(item){
  let isInArray =false
this.state.orders.forEach(el=>{
  if(el.id===item.id)
  isInArray=true
})
if(!isInArray)
  this.setState({orders:[...this.state.orders,item]})
}
}
export default App;
