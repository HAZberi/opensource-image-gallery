import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component{
    onSubmit(term){
        console.log(term);
    }
    render(){
        return (
            <div className = "ui container">
                <SearchBar onSubmit={this.onSubmit}/>
            </div>
        );
    }

}

export default App;