---
id: philosophy
title: Philosophy
sidebar_label: Philosophy
---

## Building apps can be messy

It's even messier when you have to manage request lifecycles, side effects, shared global state, and 3 to 4 boilerplate files in order to manage 1 data resource. This guide aims to provide a consistent pattern intended to increase productivity and reduce entropy long term.

Typically, there are 2 common patterns implemented in redux-world that you will find in the wild:

*   **Pattern A:** Conventions suggested by the official redux guides
*   **Pattern B:** Place all redux-related files inside of the corresponding component folder


**Pattern A: Official redux convention**

```diff
├── actions
│   ├── cats.js
│   ├── todos.js
│   └── users.js
├── components
│   ├── cats
│   │   ├── Form.jsx
│   │   └── ViewAll.jsx
│   ├── todos
│   │   ├── Form.jsx
│   │   └── ViewAll.jsx
│   └── users
│       ├── Form.jsx
│       └── ViewAll.jsx
├── constants
│   ├── cats.js
│   ├── todos.js
│   └── users.js
├── reducers
│   ├── cats.js
│   ├── index.js
│   ├── todos.js
│   └── users.js
├── sagas
│   ├── cats.js
│   ├── todos.js
│   └── users.js
└── index.js
```

**Pattern B: Component scoped convention**

```diff
├── components
│   ├── cats
│   │   ├── Form.jsx
│   │   ├── ViewAll.jsx
│   │   ├── actions.js
│   │   ├── constants.js
│   │   ├── reducer.js
│   │   └── sagas.js
│   ├── todos
│   │   ├── Form.jsx
│   │   ├── ViewAll.jsx
│   │   ├── actions.js
│   │   ├── constants.js
│   │   ├── reducer.js
│   │   └── sagas.js
│   └── users
│       ├── Form.jsx
│       ├── ViewAll.jsx
│       ├── actions.js
│       ├── constants.js
│       ├── reducer.js
│       └── sagas.js
└── index.js
```

Both ways work to organize the code and are fine. We can apply a similar structure to saga slices:

**Pattern A:**

```diff
- ├── actions
  ├── components
  │   ├── cats
  │   │   ├── Form.jsx
  │   │   └── ViewAll.jsx
  │   ├── todos
  │   │   ├── Form.jsx
  │   │   └── ViewAll.jsx
  │   └── users
  │       ├── Form.jsx
  │       └── ViewAll.jsx
- ├── constants
- ├── reducers
+ ├── modules
+ │   ├── index.js
+ │   ├── cats.js
+ │   ├── todos.js
+ │   └── users.js
  ├── index.js
+ └── store.js
```

**Pattern B:**

```diff
  ├── components
  │   ├── cats
  │   │   ├── Form.jsx
  │   │   ├── ViewAll.jsx
- │   │   ├── actions.js
- │   │   ├── constants.js
- │   │   ├── reducer.js
+ │   │   └── sagaSlice.js
  │   ├── todos
  │   │   ├── Form.jsx
  │   │   ├── ViewAll.jsx
- │   │   ├── actions.js
- │   │   ├── constants.js
- │   │   ├── reducer.js
+ │   │   └── sagaSlice.js
  │   └── users
  │       ├── Form.jsx
  │       ├── ViewAll.jsx
- │       ├── actions.js
- │       ├── constants.js
- │       ├── reducer.js
+ │       └── sagaSlice.js
  ├── index.js
+ ├── modules.js
+ └── store.js
```

## Bringing in saga slices

In either case, it is cleaner to separate redux store, react config, and module declarations into separate files. This allows us to leave each file to perform its' intended purpose. For example:

**Pattern A:** **`./modules/index.js`**

```js
// ./modules/index.js
import CatsSlice from './cats'
import UsersSlice from './users'
import TodosSlice from './todos'

export default [
 CatsSlice,
 UsersSlice,
 TodosSlice
];
```

**Pattern B:** **`./modules.js`**

```js
// ./modules.js
import CatsSlice from './cats/components/sagaSlice'
import UsersSlice from './users/components/sagaSlice'
import TodosSlice from './todos/components/sagaSlice'

export default [
 CatsSlice,
 UsersSlice,
 TodosSlice
];
```

Both should only worry about importing the saga slice modules and not couple store instantiation logic inside of here. This allows for this file to be the source of truth for declaring saga slices. It can grow as much as it needs to without logic clutter.


## Wiring everything up

Wiring up React, and wiring up redux can both become a stringy, tangled mess. This is why it is wise to separate the two.


**File** **`./store.js`**

Should only contain redux logic. It should not be coupled with react logic at all. The helps us grow the logic needed for redux in particular away from React.


```js
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga, rootReducer } from 'saga-slice';

​// This is where you would bring in your array of saga slices or any other
// map of extra reducers.
import reduxModules from './modules';
import history from './utils/history';

​const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

​
export const store = createStore(

  rootReducer(reduxModules, {
  ​

    // Extra reducers
    router: connectRouter(history)

  }),

  composeEnhancers(applyMiddleware(sagaMiddleware))

);

export const { getState, dispatch, subscribe } = store;

sagaMiddleware.run(rootSaga(reduxModules));

export default store;
```

**File** **`./index.js`**

This file should be focused on your root level application logic relating to react. This includes any routing you might want to implement, HOCs, and containers that need to wrap your application logic.


```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';

import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

export const AppWrapper = (

  <Provider store={store}>
      <App />
  </Provider>
);
​
ReactDOM.render(AppWrapper, document.getElementById('root'));
```
​
