import React, {Component} from 'react';

class SearchForm extends Component {

    state = {
        textBusqueda: ''
    }

    cambiarBusqueda = (evt) => {
        this.setState({textBusqueda: evt.target.value});
    };

    enviarValorBusqueda = (evt) => {
        evt.preventDefault();
        this.props.realizarBuqueda(this.state.textBusqueda);
        evt.currentTarget.reset();
    }

    render() {
        return (
            <form className="buscar" onSubmit={this.enviarValorBusqueda}>
                <input className="buscar-input" 
                    type="text" 
                    placeholder="Buscar gif" 
                    onChange={this.cambiarBusqueda}
                />
                <button type="submit">
                    <i className="material-icons icon">search</i>
                </button>
            </form>
        );
    }
}

export default SearchForm;