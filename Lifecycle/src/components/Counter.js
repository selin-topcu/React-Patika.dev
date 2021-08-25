import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Number State GÜncellendi");
  }, [number]);
  //dependencies array, mount edildiği an yakalamayı sağlıyor
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}
export default Counter;
