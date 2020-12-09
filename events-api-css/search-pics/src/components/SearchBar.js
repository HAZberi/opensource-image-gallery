import React from "react";


class SearchBar extends React.Component {
    render(){
        return (
            <div className = "ui segment" style={{marginTop: "5rem"}}>
                <form className = "ui form">
                    <div className = "field">
                        <label>Image Search</label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;