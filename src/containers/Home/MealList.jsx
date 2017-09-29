import React from 'react';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui'

class MealList extends React.Component {
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
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} >
						{ this.props.meals.map((item, index) => <TableRow key={ index }>
							<TableRowColumn>{ item.id }</TableRowColumn>
							<TableRowColumn>{ item.name }</TableRowColumn>
						</TableRow>) }
					</TableBody>
				</Table>
			</div>
		)
	}
}

export default MealList;