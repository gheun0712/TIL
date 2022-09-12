import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/*주석은 이렇게 작성*/}
      <div className="react">{name}</div>
      //이런 주석이나 /*이런 주석은 페이지에 그대로 나옴 */
      <input />
    </>
  );
}

export default App;
