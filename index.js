'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = nextActionsMiddleware;

function nextActionsMiddleware(_ref) {
	var dispatch = _ref.dispatch;

	return function (next) {
		return function (action) {

			next(action);
			var then = action.then;

			if (then) {
				// console.log('MIDDLEWARE NEXT ', action.type);
				// console.log(action)
				var nextActions = then;
				if (!Array.isArray(nextActions)) nextActions = [nextActions];

				nextActions.map(function (item) {
					return dispatch(typeof item === 'function' ? item(dispatch) : item);
				});
			}
		};
	};
}

module.exports = exports['default'];
