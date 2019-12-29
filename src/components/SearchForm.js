import React from 'react';

const SearchForm = (props) => {

    return (
        <form className="buscar" onSubmit={props.realizarBusqueda}>
            <input className="buscar-input" 
                type="text" 
                placeholder="Buscar gif" 
                onChange={props.cambiarValorBusqueda}
            />
            <button type="submit">
                <i className="material-icons icon">search</i>
            </button>
        </form>
    );

}

export default SearchForm;