# ReactJS

React uses Babel to transpile (translate) JSX to JavaScript. Requires marking js files in html script with type="text/jsx".

## Components

Components are react classes with render methods. Can use curly braces and return keyword or parenthesis for implicit return. Can be stated as const with arrow functions or function.

```
function Hello() {
  return (
    <p>Hello!</p>
  )
}

OR

const Hello = () => (
  <p>Hello!</p>
)
```

### Add Component to HTML

Commonents are added with ReactDOM.render()

- Use getElement or querySelector to select element from DOM

```
ReactDOM.render(<Hello/>, document.getElementById("root"));
```

### Components from different files

1. Must be included in html scripts.
2. Must be called before any scripts that use them.

- Ex: app.js renders App component with randomNum component nested inside, therefore must list randomNum first.

```
<html>
<script src="randomNum.js">
<script src="app.js">
</html>
```

### Class-based versus Function-based Component

```
class Hello extends React.Component {
    render() {
        return <p>Hello!</p>
    }
}
```

## Propertiess

Aka. props are used to configure a component and are immutable.
Props can be strings, but other types must be embedded using curly braces.

```
<Animal species='dog' age={ 9 }>
```

### Conditionals

Functional components can render:

- A single valid DOM object
- An array of DOM objects
- Null (<i>cannot</i> return undefined)
- Can have ternary operations i.e. boolean values
