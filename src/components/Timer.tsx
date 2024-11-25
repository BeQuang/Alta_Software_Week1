import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Timer;
