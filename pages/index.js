import Head from 'next/head'
import { useState } from 'react'
import css from '../styles/Home.module.css'
import Image from 'next/image'




function PlanetList() {
  const planetUrl ='https://swapi.dev/api/planets/';
  const [planets, setPlanets] = useState([]);

  async function getPlanets(){
    const res= await fetch (planetUrl);
    const data = await res.json();
  
    const { name, diameter, rotation_period, orbital_period, gravity, population, climate } = data
    setPlanets(data.results);

    

  }
  return (

    <div className={css.container}>
     

      
      

<div className={css.imageholder}>
<h1>Welcome to the -INCREDIBLE- SWAPI Planet-list!</h1>
      
<Image
        src="/planets.png"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      </div>

      <button className={css.button} onClick={getPlanets} type="button">
        CLICK ME!
      </button>

      

      {planets.length ? (
        <ul className={css.cardgrid}>
      
          {planets.map(({name, diameter, rotation_period, orbital_period, gravity, population, climate}) => (
            
            <div className={css.card}>
            <li className={css.planetlist}>
              <h2>Planet: {name}</h2>
               <p>Diameter: {diameter} </p>
                <p>Rotation period: {rotation_period}</p>
                <p>Orbital period: {orbital_period} </p>
                <p>Gravity: {gravity}</p>
                <p>Polpulation: {population} </p>
                <p>Climate: {climate}</p>
                </li>
                </div>
                

          ))}
        </ul>
      ): <></>}
    </div>
  );}

  export default PlanetList;


