import { createContext, useState } from "react";
import "./App.css";
import FilterMovies from "./components/FilterMovies";
import Movies from "./components/Movies";
import SearchMovies from "./components/SearchMovies";

export const MoviesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("iron");
  const [type, setType] = useState("");
  return (
    <MoviesContext.Provider 
    value={{
      movies, 
      search,
      type,
      setMovies,
      setSearch,
      setType: e => setType(e)
      }}>
      <div>
        <SearchMovies />
        <div>
          <FilterMovies />
          <Movies />
        </div>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
