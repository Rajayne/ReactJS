const Shiba = () => (
  <img src="https://moderndogmagazine.com/sites/default/files/images/uploads/Inset-1_34.jpg" />
);

const AusShepherd = () => (
  <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSurnoJZG7xrZOf8z4TfF2qc8rFGaHPu4IJAFu0qECrGa3HQPOeXJ8IxPQuY7kILLBGsjP_-aB8StcuKjU" />
);

// Window Key + . will open emoji selector
function App() {
  return (
    <div>
      <TodoList todos={["Walk the dog", "Feed the dog", "Play with the Dog"]} />
      <RandomChoice choices={["red", "green", "yellow"]} />
      <RandomNum />
      <RandomNum />
      <RandomNum />
      <Animal emoji="🐕" name="sumo" species="dog" isAvailable={true} />
      <Animal emoji="🐈‍⬛" name="midna" species="cat" isAvailable />
      <Animal emoji="🐄" name="moocifer" species="cow" />
      <Bouncer age={16} />
      <Bouncer age={20} />
      <Bouncer age={32} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
