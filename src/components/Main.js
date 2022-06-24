import { Route, Switch } from 'react-router-dom';
import Content from "./Content"
import SetInBox from './setInBox'
const Main = () => {
    return (
      <Switch>
          <Route exact path='/' component={Content}/>
          <Route path='/setInBox' component={SetInBox}/>
        </Switch>
    )
  }
  export default Main