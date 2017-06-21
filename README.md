# React-Redaxe

Redaxe is a simpler state container for your front-end applications. It is inspired by Redux's global state, but gets rid of the application separate of actions and reducers. Instead the 'Redaxe' way is to import your state directly into each component and whenever you want to update the state, you call the `update` function and give it the new state. To make React compoonents testable, React-Redaxe gives a similar API to Redux, but using a connect function to add your handlers and state to props instead of directly into your component so they stay pure.



## Installation

```bash
$ npm install --save react-redaxe
```

## API
* connect - Takes an object which maps any data, whether they are handlers or state to your props. It then returns a component with the new connected component

## Example

```
import { connect } from 'react-redaxe'

const Component = ({ handleStateChange }) => <div>
  <div>{db.get('foo')}</div>
  <button onClick={handleStateChange}>Change to bar</button>
</div>

export default connect({handleStateChange}, Component)
```
