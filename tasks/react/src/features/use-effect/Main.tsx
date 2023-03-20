import React, { useState } from 'react';
import Child from './Child';

function Main(): JSX.Element {
  const [showChild, setShowChild] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowChild((prev) => !prev);
  };

  return (
    <div>
      <b>Main Component</b>
      <br />
      <button type="button" onClick={handleClick}>
        Toggle Child
      </button>
      <br />
      <br />
      {showChild && <Child />}
    </div>
  );
}

export default Main;
