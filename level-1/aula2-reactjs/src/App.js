import React, { Fragment, useState, useEffect } from 'react';
import List from './components/Header';
import api from './services/api';
import Logo from './assets/img.png';
import './App.css';

export default () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('projects');
      setData(response.data);
    })()
  }, []);

  const handleAddProject = async () => {

    const response = await api.post('projects', {
      title: "teste opaaaa",
      owner: "Eitchaaaaaaa"
    });

    setData([...data, response.data]);
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
      <button type="button" onClick={handleAddProject}>Clicka Aqui</button>
    </Fragment>
  );
}

