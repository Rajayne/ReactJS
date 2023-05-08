const RandomNum = () => {
  const rand = Math.floor(Math.random() * 10) + 1;
  return <h3>{rand}</h3>;
};

const RandomChoice = (props) => {
  const idx = Math.floor(Math.random() * props.choices.length);
  const choice = props.choices[idx];
  return <h4>Random choice is: {choice}</h4>;
};
