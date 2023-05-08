# ReactJS

React uses Babel to transpile (translate) JSX to JavaScript. Requires marking js files in html script with type="text/jsx".

## Components

Components are react classes with render methods.

```
const Hello = () => {
  return (<p>Hello!</p>) }

OR

function Hello() {
  return <p>Hello!</p>
}
```

## Add Component to HTML

Commonents are added with ReactDOM.render()

- Use getElement or querySelector to select element from DOM

```
ReactDOM.render(<Hello/>, document.getElementById("root"));
```
