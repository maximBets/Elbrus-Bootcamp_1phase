import React, { useState, useEffect } from 'react';

function Child(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  // фазы жизненного цикла
  // mount - монтирование (первый рендеринг)

  // clear - очистка
  // update - изменения (перерендеринг)

  // unmount - размонтирование (исчезает со страницы)

  useEffect(() => {
    // 1. mount
    // 6. update
    console.log('effect 1');
    // 4. clear
    // 8. unmount
    return () => console.log('clear effect 1');
  });

  useEffect(() => {
    // 2. mount
    console.log('effect 2');
    // 9. unmount
    return () => console.log('clear effect 2');
  }, []);

  useEffect(() => {
    // 3. mount
    // 7. update
    console.log('effect 3');
    // 5. clear
    // 10. unmount
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
