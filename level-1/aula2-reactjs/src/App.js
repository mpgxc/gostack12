import React, { Fragment, useState, useEffect } from 'react';
import List from './components/Header';
import api from './services/api';
import Logo from './assets/img.png';
import './App.css';

export default () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => setData(response.data));
  }, []);

  const handleSubmit = () => {

  }

  return (
    <Fragment>
      <List title={"Meu Deus!"}>
        <h1>Hello, there</h1>
      </List>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>)
        )}
      </ul>
      <button type="button" onClick={handleSubmit}>Clicka Aqui</button>
    </Fragment>
  );
}

