import { useEffect, useState } from "react";

const Counter = ({ end, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let current = 0;
    const speed = Math.ceil(end / 80);

    const interval = setInterval(() => {
      current += speed;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [end, startCounting]);

  return <h3>{count}+</h3>;
};

export default Counter;
