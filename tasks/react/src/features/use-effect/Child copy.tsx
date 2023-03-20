import React, { useState, useEffect } from 'react';

function Child(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('effect 1');
    return () => console.log('clear effect 1');
  });

  useEffect(() => {
    console.log('effect 2');
    return () => console.log('clear effect 2');
  }, []);

  useEffect(() => {
    console.log('effect 3');
    return () => console.log('clear effect 3');
  }, [count]);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <b>Child component</b>
      <div>Count: {count}</div>
      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
    </div>
  );
}

export default Child;
