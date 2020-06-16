import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import './App.css';
import Logo from './assets/img.png';
/**
 * Componente
 * Propriedade
 * Estado
 */

export default () => {

  const [data, setData] = useState([0, 1, 2, 3, 4, 5]);

  const handleClick = () => {
    setData([...data, data[data.length - 1] + 1]);
  }

  return (
    <Fragment>
      <Header title={"Meu Deus!"}>
        <img src={Logo} />
        <Header title={"Meu Deus!"}>
          <ul>Home</ul>
          <ul>Home2</ul>
          <ul>Hodme3</ul>
        </Header>
      </Header>
      {
        data.map(item => <ul key={`item-${item}`}>{item}</ul>)
      }
      <button type="button" onClick={handleClick}>Clicka Aqui</button>
    </Fragment>
  );
}

