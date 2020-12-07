import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';

/* const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position.coords),
    (err) => console.error(err)
  );
  return <div>Hello Zuberi!!</div>;
}; */

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //initialize state
  //   this.state = { lat: null, errorMessage: "" };
  //   /*       window.navigator.geolocation.getCurrentPosition(position=>{
  //       //always use setState to set the state 
  //       //direct assignment like this.state.lat = position.coords.latitude
  //       //is not recommended
  //       this.setState({lat: position.coords.latitude})
  //     }, err=>{
  //       this.setState({errorMessage: err.message});
  //     }); */
  // }

  //Alternate syntax if we dont want to define a constructor
  //declare state as App public variable

  state = {lat: null, errorMessage: ""}


  componentDidMount() {
    //Data loading should be done here!!
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  //React says we have to define a render!!
  //React will get angry that why there is no returning JSX in render
  render() {
    //render function is automatically called several times so any api references should be
    //declated explicitly
    //conditional returns
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay lat = {this.state.lat}/>
        </div>
        
      );
    }
    return <div>Loading!!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
