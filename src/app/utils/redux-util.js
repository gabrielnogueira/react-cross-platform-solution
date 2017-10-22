export function createReducer(initialState, handlers){
    return function reducer(state = initialState, action){
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action);
        }else{
            let {multiHandlers} = handlers;
            if(multiHandlers){
                return Object.keys(multiHandlers).reduce((currentState, actionHandler) => {
                    const actionTypes = multiHandlers[actionHandler];
                    if (actionTypes.indexOf(action.type) > -1) {
                        return handlers[actionHandler].call(null, currentState, action);
                    }else{
                        return currentState;
                    }
                }, state);
            }else{
                return state;
            }
        }
    }
}

// export function createConstants(constants) => {
//     return constants.reduce((accumConstants, currConstant) => {
//         return Object.assign({}, accumConstants, {[currConstant]: currConstant});
//     }, {});
// };

// export function createReducer(initialState, handlers) {

// }
    