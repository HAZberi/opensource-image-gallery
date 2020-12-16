import React from "react";

class SearchBar extends React.Component {

    //How to deal with referencing this value when dealing with events
    //Method One **************

/*     constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }; */

  state = { term: "" };

    //How to deal with referencing this value when dealing with events
    //Method Two ************** es6 style 🤨

  onFormSubmit = (event)=>{
      event.preventDefault();

      this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "5rem" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label></label>
{/*             this how we handle events in react
            generally there are two types of handling events
            controlled vs uncontrolled
            the major difference is react should be able to mainpulate
            the data values and we must not fetch data from dom each and every time */}
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              placeholder='Start Typing . . . .'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
