const logs = (state = [], action) => {
	let newState = state.slice(0);
	switch (action.type) {
		case '@@redux/INIT':
			break;
		case 'LOG':
		console.log(action.payload);
			newState.push(action.payload);
	}
	return newState;
}
export default logs;