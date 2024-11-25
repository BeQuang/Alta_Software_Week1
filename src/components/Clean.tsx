import { useEffect, useState } from "react";

const Clean = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer khi component unmount
  }, []);

  return <p>Seconds: {seconds}</p>;
};

export default Clean;
