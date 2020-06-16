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

  const handleClick = () => {
    setData([...data, data[data.length - 1] + 1]);
  }

  return (
    <Fragment>
      <List title={"Meu Deus!"}>
        <img src={Logo} />
      </List>
      {
        data.map(item => <ul key={`item-${item}`}>{item}</ul>)
      }
      <button type="button" onClick={handleClick}>Clicka Aqui</button>
    </Fragment>
  );
}

