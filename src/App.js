import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  //let totalCount = 0;

  const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal((prevState) => {
      return prevState + 1;
    });
    console.log(total);
  };
  const decrease = () => {
    setTotal(total - 1);
    console.log(total);
  };
  useEffect(() => {
    console.log("use effect çalıştı");
  }, [total]);

  return (
    <>
      {/*<p>Toplam Tıklama Sayısı : {total}</p>
      <button
        onClick={() => {
          increase();
        }}
      >
        +
      </button>
      <button onClick={decrease}>-</button>*/}
      <Todo/>

    </>
  );
}

export default App;
