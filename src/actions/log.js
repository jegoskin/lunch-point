export const log = (message) => ({
	type: 'LOG',
	payload: {
		message
	}
})

export const asyncLog = (message) => ((dispatch) => {
	dispatch({
		type: 'LOG',
		payload: {
			message : 'ASYNC log in 3s'
		}
	})
	setTimeout(() => {
		dispatch({
			type: 'LOG',
			payload: {
				message
			}
		})
	}, 3000)
})