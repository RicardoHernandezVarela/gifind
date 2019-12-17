import React from 'react';

const Gif = (props) => {
    return (
        <li>
            <img src={props.url} alt="GIF" />
        </li>
    );
}

export default Gif;