import React from 'react';

/* Importar componentes */
import Gif from './Gif';

const GifList = (props) => {
    const data = props.data;
    let gifs;

    if(data.length > 0){
        gifs = data.map( gif => {
            return (
                <Gif 
                    url={gif.images.fixed_height.url} 
                    key={gif.id} />
            );
        });
    }

    return (
        <ul className="contenido">
            {gifs}
        </ul>
    );
}

export default GifList;