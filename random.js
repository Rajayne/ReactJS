const RandomNum = () => {
  const rand = Math.floor(Math.random() * 10) + 1;
  return <h3>{rand}</h3>;
};

const RandomChoice = (props) => {
  const idx = Math.floor(Math.random() * props.choices.length);
  const choice = props.choices[idx];
  return <h4>Random choice is: {choice}</h4>;
};

const RandomNumRange = ({ min = 1, max = 10 }) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return <h2>Random number in range is: {rand}</h2>;
};
