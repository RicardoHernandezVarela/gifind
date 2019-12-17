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
    realizarBuqueda: this.realizarBuqueda.bind(this)
  };

  componentDidMount() {
    this.realizarBuqueda();
  }

  realizarBuqueda(query = 'minato') {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({gifs: responseData.data});
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
            <SearchForm realizarBuqueda={this.state.realizarBuqueda}/>
        </div>
        <div className="main">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
