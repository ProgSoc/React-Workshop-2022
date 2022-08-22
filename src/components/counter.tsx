import { useEffect, useState } from "react";

export const ReactCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("unmounting");
    };
  }, [count]);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
