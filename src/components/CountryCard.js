import React from 'react';

const CountryCard = ({country}) => (
  <div className='flex-item'>
    <img src='https://via.placeholder.com/300/09f.png/flag' />


    <div className='details-container'>
      <h3>Germany</h3>

      <b>Population:</b>
      81,770,900
      <br/>
      <b>Region: </b>
      Europe
      <br/>
      <b>Capital: </b>
      Berlin
      <br/>

    </div>
  </div>
);

export default CountryCard;
