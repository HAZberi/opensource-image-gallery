import React from "react";
import unsplash from "../api/unsplash";
import pexels from "../api/pexels";
import Layout from "./Layout";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], loading: false, notFound: false };
  onSearchSubmit = async (term) => {
    this.setState({ loading: true, notFound: false });
    let allResults = [];
    try {
      const unsplashResponse = await unsplash.get("/search/photos", {
        params: { query: term, per_page: 20 },
      });
      const pexelsResponse = await pexels.get("/search", {
        params: { query: term, per_page: 20 },
      });
      allResults = [
        ...pexelsResponse.data.photos,
        ...unsplashResponse.data.results,
      ];
    } catch (err) {
      console.error(err);
    }
    if (allResults.length >= 1) {
      this.setState({ images: allResults, loading: false });
    } else {
      setTimeout(() => {
        this.setState({ loading: false, notFound: true });
      }, 1000);
    }
  };
  notFoundJSX = () => (
    <div className="ui placeholder segment" style={{ height: "50vh" }}>
      <div className="ui large header" style={{ margin: "auto" }}>
        No Images Found! Try something else.
      </div>
    </div>
  );

  loadingJSX = () => (
    <>
      <div className="ui segment" style={{ height: "50vh" }}>
        <div className="ui active inverted dimmer">
          <div className="ui massive text loader">Fectching Content...</div>
        </div>
      </div>
    </>
  );
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
          {this.state.loading ? (
            this.loadingJSX()
          ) : this.state.notFound ? (
            this.notFoundJSX()
          ) : (
            <ImageList images={this.state.images} />
          )}
        </div>
      </Layout>
    );
  }
}

export default App;
