import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let _e = React.createElement("div", null, "Hello, 리액트!",
    React.createElement("p", null, "반갑습니다.")
  );

  let name = "리액트!";

  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px'
  };

  return (
    <div className="container">{/* react에서는 className으로 선택, App.css 사용 */}
    <div style={style}></div>
      <h1 className='test'>Hello,
      {
        name === "리액트!" ? (<h1>YES</h1>) : (<h1>NO</h1>)
      }!!</h1>
      <p>반갑습니다.</p>
      <br></br>
      <input></input>
    </div>
  );
}

export default App;
