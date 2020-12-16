import React from "react";
import "./imageList.css";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => (
    <img src={urls.regular} alt={description} key={id} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
