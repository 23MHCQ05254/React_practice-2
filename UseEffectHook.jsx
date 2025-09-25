import { useState, useEffect } from "react";
//use effect is used to render when the staet is changed
// it runs only once ,it is used in setinterval settimeout functions also
function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect ran because count changed to ${count}`);
  }, [count]); // depends on "count"

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
export default UseEffectHook;