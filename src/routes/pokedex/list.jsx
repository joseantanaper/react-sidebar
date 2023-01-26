import React, { useEffect } from 'react';

export async function loader() {

  return null;

}

export default function Pokedex_List() {

  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState('true');

  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
          .then((response) => response.json())
          .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
          }),
      ));
  }, []);

  setTimeout(() => {
    setLoad();
  }, 1_000);

  return (
      <div className='pokegallery row'>
        <h1>Pokedex | fetch anidado</h1>
        { load ? (
          <>
          <div className="row">
            <div className="col text-center">
              Loading...
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          </>
        ) : (
          poke.map((img, i) => (
            <div id={img.id} key={img.id} className="col">
              <div className="row">
                <div className="col text-center">
                  <img src={img.sprites.front_default} alt='pokemon' />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h5>{img.name}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6>type: {img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
  );
}