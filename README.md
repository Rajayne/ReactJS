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

## Properties

Aka. props are used to configure a component and are immutable.
Props can be strings, but other types must be embedded using curly braces.

```
<Animal species='dog' age={ 9 }>
```

### Conditionals

Functional components can render:

- A single valid DOM object
- An array of DOM objects
- Null (_cannot_ return undefined)
- Can have ternary operations i.e. boolean
- Can have else if statements

### Looping in JSX

- Can pass array directly into JSX
- Can use for loop ( to push elements into array)
- Can use map

```
Direct:
  const todos = [
    <li>Walk the dog</li>,
    <li>Feed the dog</li>,
    <li>Play with the dog</li>,
  ];
  return (
    <div>
      <h4>Todo List</h4>
      <ul>{todos}</ul>
    </div>
  );

For Loop:
  const todos = [];
  for (let t of props.todos) {
    todos.push(<li>{t}</li>)
  }

Mapping:
  return (
    <div>
        <h4>Todo List</h4>
        <ul>{props.todos.map(t => <li>{t}</li>)}</ul>
    </div>
  );
```

> Mapping is best because:
>
> - Code will run on each element in the right order
> - Original array will be unaffected as map returns new array each call

### Key Props

Each child in a list should have a unique "key" prop.

### Default Properties

Can set default properties in component.

### Props.children

Can reference props.children to access nested components or values

## JSX uses React.createElement

> JSX simplifies syntax for nesting components.

```
const heading = <h1>Header 1</h1>
=
const heading = React.createElement("h1", null, "Header 1")
```

```
const animal = <div>
  <h1>Dogs</h1>
  <Dog name='sumo' age={9}/>
</div>
=
const animal =
React.createElement("div", null,
  React.createElement("div", null, "Dogs"),
  React.createElement(Animal, {
    name='sumo',
    age=9
}));
```
