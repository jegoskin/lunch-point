import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardMedia, Dialog, FlatButton, RaisedButton } from 'material-ui';
import { asyncListMeal } from '../../actions/lunchTIme';
import MealList from './MealList';

class Home extends React.Component{
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.asyncListMeal(this.props.meals)
	}
	render(){
		return(
			<div>
				<Card>
					<CardTitle title="Home" />
					<CardMedia>
						<MealList meals={this.props.meals} />
					</CardMedia>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	meals : state.lunchTime.mealList,
})

const mapDispatchToProps = {
	asyncListMeal,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))