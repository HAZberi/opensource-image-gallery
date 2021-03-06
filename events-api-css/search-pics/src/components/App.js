import React from "react";
import unsplash from "../api/unsplash";
import pexels from "../api/pexels";
import Layout from "./Layout";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const unsplashResponse = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20 },
    });
    const pexelsResponse = await pexels.get("/search", {
      params: { query: term, per_page: 20 },
    });
    const allResults = [
      ...pexelsResponse.data.photos,
      ...unsplashResponse.data.results,
    ];
    this.setState({ images: allResults });
  };
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

  //   async albertaApi() {
  //     try {
  //       const getSearchResults = await fetch(
  //         'https://api.covid19api.com/country/canada'
  //       );
  //       const searchResults = await getSearchResults.json();
  // /*       const filtered = searchResults.data.filter(element => {
  //         return element.name === "Canada";
  //       }); */
  //       console.log(searchResults);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  render() {
    return (
      <Layout>
        <div className="ui container">
          <div
            className="ui large header center aligned"
            style={{ marginTop: `2em` }}
          >
            High Quality Image Search
          </div>
          <SearchBar onSubmit={this.onSearchSubmit} />
          {/* Found: {this.state.images.length} images */}
          <ImageList images={this.state.images} />
        </div>
      </Layout>
    );
  }
}

export default App;
