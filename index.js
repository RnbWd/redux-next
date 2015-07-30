export default function nextActionsMiddleware({ dispatch }) {
	return (next) => (action) => {

		next(action);
		const { then } = action;

		if (then) {
			// console.log('MIDDLEWARE NEXT ', action.type);
			// console.log(action)
			let nextActions = then;
			if (!Array.isArray(nextActions))
				nextActions = [nextActions];

			nextActions.map(item => dispatch((typeof item === 'function') ? item(dispatch) : item));
		}
	};
}
