import React from "react";

class ImageCard extends React.Component {
    render(){
        const {description, urls} = this.props.image;
        return (
            <img src={urls.regular} alt={description} />
            
        );
    }
}

export default ImageCard;

