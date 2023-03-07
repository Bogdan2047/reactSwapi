import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./info.css";

const src = "https://swapi.dev/api/films";

export const Info = () => {
  const params = useParams();
  const filmId = params.id;
  let [film, setFilm] = useState([]);
  let [characters, setCharacters] = useState();

  useEffect(() => {
    axios.get(src).then((data) => {
      setFilm(data.data.results);
    });
  }, []);

  let findFilm = film.find((item) => {
    if (item.episode_id == filmId) {
      return true;
    }
  });

  let add = [];

  add = findFilm?.characters || [];

  useEffect(() => {
    add.map((item) => {
      axios.get(item).then((data) => setCharacters(data.data));
    });
  }, [characters]);

  let person = [];

  if (characters !== undefined) {
    person.push(characters);
  }

  return (
    <>
      {film.length == 0 && <h1>loading...</h1>}

      {film.length > 0 && (
        <div className="card text-center">
          <div className="card-header" key={findFilm.episode_id}>
            <h1>{findFilm.title}</h1>
            <h4>Year: {findFilm.release_date}</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">{findFilm.opening_crawl}</h5>
            <hr />
            <h4 className="card-text">Director: {findFilm.director}</h4>
            <hr />
            <h4 className="card-text">Producer: {findFilm.producer}</h4>
            <hr />
            <h2>characters: </h2>
            {person.length == 0 && <h2>Loading...</h2>}
            {person.length > 0 &&
              person.map((item) => {
                return <h3>{item.name}</h3>;
              })}
          </div>
          <div className="card-footer text-muted">It's all information!</div>
        </div>
      )}
    </>
  );
};
