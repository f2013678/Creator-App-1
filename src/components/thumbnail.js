import React from 'react';

const Thumbnail = (props) => {
    console.log(props)
    return(
        <img src={props.imageURL} style={{width:"100%"}} alt="ThumbNail"/>
    )
};

export default Thumbnail;