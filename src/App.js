import React, {Component} from 'react';
import logo from './img/GIFind.png';
import './App.css';

/* Importar componentes */
import SearchForm from './components/SearchForm'
import GifList from './components/GifList';

class App extends Component {

  state = {
    gifs: [],
    loading: true,
    textBusqueda: ''
  };

  componentDidMount() {
    this.realizarBuqueda();
  }

  cambiarValorBusqueda = (evt) => {
    this.setState({textBusqueda: evt.target.value});
  };

  realizarBusqueda = (evt) => {
      evt.preventDefault();
      this.realizarBuqueda(this.state.textBusqueda);
      evt.currentTarget.reset();
  }

  realizarBuqueda(query = 'minato') {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({gifs: responseData.data, loading: false});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <SearchForm 
              realizarBusqueda={this.realizarBusqueda}
              cambiarValorBusqueda={this.cambiarValorBusqueda}
            />
        </div>
        <div className="main">
          {
            this.state.loading ? <h1>Cargando...</h1> : <GifList data={this.state.gifs}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
