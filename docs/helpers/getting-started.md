---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

Saga slice helpers are an abstraction on top of saga slice that facilitate the management of state, CRUD routes for standard REST apis, and more.

## Installation

```js
npm i -S saga-slice-helpers axios
```

## Usage

`components/pies/saga-slice.js`

```js
import { crudSlice } from 'saga-slice-helpers';

const sagaSlice = crudSlice({
    name: 'pies'
});

export const { actions } = sagaSlice;
export default sagaSlice;
```

`components/pies/Form.jsx`

```js
import { actions } from './saga-slice';

export default connect(
    null,
    actions
)((props) => {

    const onSubmit = (values) => props.create(values)

    return (
        <Form onSubmit={ onSubmit }>
            ...
        </Form>
    );
})
```
