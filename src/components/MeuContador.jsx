import { useState } from "react";

export default function MeuContador() {
  console.log("renderizando...");

  let [counter, setCounter] = useState(0);

  function increase() {
    setCounter(++counter);
    console.log("o valor de counter é", counter);
  }

  function decrease() {
    setCounter(--counter);
    console.log("o valor de counter é", counter);
  }

  return (
    <>
      <h1>contador é {counter}</h1>
      {counter > 5 ? <h3>Número muito grande! ⚠️</h3> : null}
      <button onClick={increase}>aumentar</button>
      <button onClick={decrease}>diminuir</button>
    </>
  );
}
