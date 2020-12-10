import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component{
    state = { images: [] }
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        }); 
        this.setState({images: response.data.results})
    }
    //API fetch without using axios
    // async onSearchSubmit(term){
    //     try{
    //         const getSearchResults = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: 'Client-ID g8dQej2zQ2DYDQpqQqhmOK4LOeM0V9HeRsvCiUdfR8g'
    //             }
    //         });
    //         const searchResults = await getSearchResults.json();
    //         console.log(searchResults);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    render(){
        return (
            <div className = "ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }

}

export default App;