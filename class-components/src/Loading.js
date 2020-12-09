import React from 'react';

const Loading = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.text}</div>
        </div>
    );
}

Loading.defaultProps = {
    text: "Getting Location Data...."
}


export default Loading;