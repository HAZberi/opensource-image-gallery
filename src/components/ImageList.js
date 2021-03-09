import React from "react";
import ImageCard from "./ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard image={image} key={image.id} />
  ));
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 950: 3, 1200: 4}}>
      <Masonry gutter="7.5px">{images}</Masonry>
    </ResponsiveMasonry>
  );
};

export default ImageList;
