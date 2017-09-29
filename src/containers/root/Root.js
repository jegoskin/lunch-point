import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { log, asyncLog } from '../../actions/log';
import { IconButton, Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui';

import IngredientIcon from 'material-ui/svg-icons/image/adjust';
import HomeIcon from 'material-ui/svg-icons/action/home';

import Home from '../Home/Home';
import IngredinetList from '../Ingredient/Ingredient.jsx';



class NavBarBase extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarTitle text="Lunch Time" />
          <ToolbarGroup>
            <IconButton onClick={() => this.props.history.push('/')}><HomeIcon /></IconButton>
            <IconButton onClick={() => this.props.history.push('/ingredient/')}><IngredientIcon /></IconButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
const NavBar = withRouter(NavBarBase);



class Root extends Component {
  constructor() {
    super();
    this.state = this.getInitState();
  }
  getInitState = () => ({})
  componentDidMount() {
    //this.props.log("Root mount");
    //this.props.asyncLog("Async Root mount");
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/ingredient/' component={IngredinetList}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  log,
  asyncLog
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
