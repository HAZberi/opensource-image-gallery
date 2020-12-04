//Import React main working libraries
import React from "react";
import ReactDOM from "react-dom";
//Make a react component

/* const App = function () {
  return <div>The Hello World of React WOW</div>;
}; */
/* const getButtonText = function(){
    return 'Click on Me!';
} */
const App = () => {
    const labelText = 'Enter Name:'
    const buttonText = { text: 'Click Me'};
  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "steelblue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Render the react component in the browser
ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
