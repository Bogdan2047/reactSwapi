import react, { useEffect, useState } from "react";
import axios from "axios";
import { AxiosContext } from "./axiosContext";

const src = "https://swapi.dev/api/films";

export const AxiosProvider = ({ children }) => {
  const [articals, setArticals] = useState([]);

  let films = [];

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticals(data.data.results);
    });
  }, []);

  films.push(articals);

  return (
    <AxiosContext.Provider value={films}>{children}</AxiosContext.Provider>
  );
};
