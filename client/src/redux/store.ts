import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { postsReducer } from './postsRedux';
import { ActionTypes } from './actionTypes';

const rootReducer = combineReducers({
  postsReducer
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppState, ActionTypes>),
    process.env.MODE !== 'production' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export type AppState = ReturnType<typeof rootReducer>;
