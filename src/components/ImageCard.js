import React from "react";

class ImageCard extends React.Component {
  createImgJSX = (_) => {
    const { description, urls, src, photographer } = this.props.image;
    return (
      <>
        <a
          href={urls?.regular || src.large}
          target="_blank"
          rel="noreferrer"
          style={{ cursor: "auto" }}
        >
          <img
            
            src={urls?.regular || src.large}
            alt={description || `A photo by: ${photographer}`}
            style={{ width: "100%", display: "block" }}
          />
        </a>
      </>
    );
  };

  render() {
    return <>{this.createImgJSX()}</>;
  }
}

export default ImageCard;
