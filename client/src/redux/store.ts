import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { postsReducer } from './postsRedux';
import { ActionTypes } from './actionTypes';

const rootReducer = combineReducers({
  postsReducer
});

const middlewareSetup = () => {
  if (process.env.NODE_ENV === 'production') {
    return compose(
      applyMiddleware(thunk as ThunkMiddleware<AppState, ActionTypes>)
    );
  }
  return compose(
    applyMiddleware(thunk as ThunkMiddleware<AppState, ActionTypes>),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export const store = createStore(rootReducer, middlewareSetup());

export type AppState = ReturnType<typeof rootReducer>;
