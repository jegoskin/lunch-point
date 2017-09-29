import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardMedia, Dialog, FlatButton, RaisedButton } from 'material-ui';
import { asyncListIngredient } from '../../actions/lunchTIme';
import IngredientList from './IngredientList';

class Ingredient extends React.Component{
	constructor() {
		super();
	}
	componentDidMount() {
		this.props.asyncListIngredient(this.props.ingredients)
	}
	render(){
		return(
			<div>
				<Card>
					<CardTitle title="Ingredients" />
					<CardMedia>
						<IngredientList ingredients={this.props.ingredients} />
					</CardMedia>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	ingredients : state.lunchTime.ingredientList
})

const mapDispatchToProps = {
	asyncListIngredient
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ingredient))