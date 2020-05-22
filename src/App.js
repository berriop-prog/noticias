import React, { Component } from 'react';
class App extends Component {
  state = {};

  componentDidMount() {
    /* const headers = new Headers();
    headers.append('X-Api-Key', '156e55ea2f484d48879ffb4d68d4ffa5');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
    console.log(headers.get('Access-Control-Allow-Origin')) */
    
    const options = {
      method: 'GET',
      headers: {
        "X-Api-Key": "156e55ea2f484d48879ffb4d68d4ffa5",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      mode: 'cors'
    };
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=business`;
    fetch(url, options).then(res => {
      console.log(res)
      return res.json()
    }).then(res => {
      console.log(res);
      return res;
    });
    
  }
  render() {
    return (
      <div className="container">
        <h1>Buscador de noticias</h1>
      </div>
    );
  }
}

export default App;
