import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui';

class IngredientList extends React.Component {
	render(){
		return(
			<div>
				<Table>
					<TableHeader
						displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
					>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Alergen</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} >
						{ this.props.ingredients.map((item, index) => <TableRow key={ index }>
							<TableRowColumn>{ item.id }</TableRowColumn>
							<TableRowColumn>{ item.name }</TableRowColumn>
							<TableRowColumn>{ item.isAlergen? 'ANO' : 'NE' }</TableRowColumn>
						</TableRow>) }
					</TableBody>
				</Table>
			</div>
		)
	}
}

export default IngredientList;