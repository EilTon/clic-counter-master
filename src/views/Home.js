import React from 'react';

function Home({
  onDecrement,
  onIncrement,
  counter,
}) {
  return (
    <div>
      <button onClick={onIncrement}>
        +1
      </button>
      <button onClick={counter > 0 ? onDecrement : null}>
        -1
      </button>
      <h1>Vous avez cliqué {counter} fois</h1>
    </div>
  );
};

export default Home;
