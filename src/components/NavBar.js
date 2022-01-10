import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'BIG PONS'},
    { id: '123asf', address: '/category/A', text: 'SIMPLES' },
    { id: 'sgs3q3', address: '/category/B', text: 'DOBLES' },
    { id: 'gkl98s', address: '/category/C', text: 'TRIPLES' },
  ];

  return (
    <section style={{ background: 'black', textAlign: 'center' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}
            >
              {cat.text}
            </NavLink>
          </div>
        );
      })}
      <FontAwesomeIcon icon={faShoppingCart} style={{color:"white"}}/>
    </section>
  );
};
