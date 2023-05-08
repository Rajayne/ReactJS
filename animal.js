const Animal = (props) => {
  return (
    <div>
      <h1>{props.emoji}</h1>
      <h3>Name: {props.name}</h3>
      <h3>Species: {props.species}</h3>
      <h3>IsAvailable: {props.isAvailable ? "✅" : "❌"}</h3>
    </div>
  );
};
