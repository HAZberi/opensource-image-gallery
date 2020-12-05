import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from './SeasonDisplay';

/* const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position.coords),
    (err) => console.error(err)
  );
  return <div>Hello Zuberi!!</div>;
}; */


class App extends React.Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(position=>console.log(position.coords), err=>console.log(err));
        return   <div>Latitude: </div>;

    }
} 

ReactDOM.render(<App />, document.querySelector("#root"));
