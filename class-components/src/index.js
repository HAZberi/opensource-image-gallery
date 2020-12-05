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
    constructor(props){
      super(props);
      this.state = { lat: null };
      window.navigator.geolocation.getCurrentPosition(position=>{
        //always use setState to set the state 
        //direct assignment like this.state.lat = position.coords.latitude
        //is not recommended
        this.setState({lat: position.coords.latitude})
      }, err=>console.log(err));
    }
  //React says we to define a render!! 
  //React will get angry that why there is no returning JSX in render
    render(){
        //render function is automatically called several times so any api references should be
        //declated explicitly
    return   <div>Latitude: {this.state.lat}</div>;

    }
} 

ReactDOM.render(<App />, document.querySelector("#root"));
