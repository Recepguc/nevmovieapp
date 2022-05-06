import axios from "axios";
import React, { useEffect } from "react";

const API_KEY = "2b2c46b37fbf259f5968db7bd2a5607c";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <div>Main</div>;
};

export default Main;
