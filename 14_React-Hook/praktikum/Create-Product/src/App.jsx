import { useEffect } from "react";
import Header from "./page/Header";
import Main from "./page/Main";

function App() {
  useEffect(() => {
    alert("halo");
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
