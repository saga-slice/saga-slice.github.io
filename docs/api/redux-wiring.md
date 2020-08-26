---
id: redux-wiring
title: rootReducer and rootSaga API
sidebar_label: Redux Wiring
---

## `rootReducer(modules, others)`

Root reducer is a helper that facilitates creating a combined redux store. Under the hood it utilizes redux's `combineReducers` function. It also gives us the ability to add other reducers outside of saga-slice into the mix.

Setting up the root reducer should be pretty straightforward:

```javascript
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'saga-slice';

import TodosSlice from './todos/sagaSlice.js';

// And add all of your saga slices into an array.
// This array can only contain saga-slices.
const modules = [
    TodosSlice
];

// You can optionally pass other reducers to this root
// reducer for cases where you have something outside the
// scope of saga-slice.
const appReducer = rootReducer(modules, {
    myExtraReducer: (state, action) => { /* do stuff */ }
});

const store = createStore(appReducer);

export default store;
```


## `rootSaga(modules)`

Root saga is a helper that facilitates running all your module's sagas.

Setting up the root reducer should be pretty straightforward and is the same as what you saw in the [Getting Started](../) page:

```javascript
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga, rootReducer } from 'saga-slice';

// Bring in all of your saga slices together in whatever file
// you're going to declare your redux store
import TodosSlice from './todos/sagaSlice.js';

// And add all of your saga slices into an array
const modules = [
    TodosSlice
];

const sagaMiddleware = createSagaMiddleware();

// Typicaly redux middleware
const middleware = applyMiddleware(...[
    sagaMiddleware,
    /* redux dev tools, etc*/
])

// Implement root reducer
const store = createStore(rootReducer(modules), middleware);

// Implement root saga
sagaMiddleware.run(rootSaga(modules));

export default store;
```
