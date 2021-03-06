# React-Redaxe

Redaxe is a simpler state container for your front-end applications. It is inspired by Redux's global state, but gets rid of the application separate of actions and reducers. Instead the 'Redaxe' way is to import your state directly into each component and whenever you want to update the state, you call the `update` function and give it the new state. To make React components testable, React-Redaxe gives a similar API to Redux, but using a connect function to add your handlers and state to props instead of directly into your component so they stay pure.

In addition to testability, it also implements [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent) which makes shallow comparisons of props to decide whether to re-run the render function. Using [immutable](https://facebook.github.io/immutable-js/) allows you to make quick deep comparisons as well.


## Installation

```bash
$ npm install --save react-redaxe
```

## API
* connect - Takes mapToStateToProps function that maps any data, whether they are handlers or state to your props. It then returns a component with the new connected component

## Example

```js
import { connect } from 'react-redaxe'
import { db } from 'redaxe'

const Component = ({ handleStateChange, foo }) => <div>
  <div>{foo}</div>
  <button onClick={handleStateChange}>Change to bar</button>
</div>

export default connect(db => ({
  handleStateChange,
  foo: db.get('foo')
}), Component)
```
