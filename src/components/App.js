import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images: [] }

  // Event handler using promise with axios

  // onSearchSubmit = (term) => {
  //   console.log(term);
  //     axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization: 'Client-ID CLIENT ID HERE'
  //       }
  //     })
  //     .then(res => this.setState({ images: res.data.results }))
  //     .catch()
  // }

  // Event handler using async/await

  // onSearchSubmit = async (term) => {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID CLIENT ID HERE'
  //     }
  //   });
  //   this.setState({ images: response.data.results })
  // }

  // Event handler using async/await and external library
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results })
  }

  render() {
    return(
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;
