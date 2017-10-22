import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import logicMiddleware from './logic'

// import thunkMiddleware from 'redux-thunk'

import reducers from './reducers';

const loggerMiddleware = createLogger({predicate:(getState, action) => '__DEV__'});

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
        logicMiddleware,
      loggerMiddleware
    )
  );

  return createStore(reducers, initialState, enhancer);
}

export const store = configureStore({});

export function createReducer(initialState, handlers){
    return function reducer(state = initialState, action){
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action);
        }else{
            return state;
        }
    }
}



