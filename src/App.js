import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        // console.log(data);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <figure>
        <a
          href="https://www.imdb.com/title/tt2861424/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <img src="images/logo.png" alt="Rick & Morty logo" className="logo" />
        </a>
      </figure>

      <div className="search">
        <form action="">
          <AiOutlineSearch className="search-icon" />
          <input
            type="text"
            placeholder="Filter by name..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
          <AiOutlineUser className="search-person" />
        </form>
      </div>

      {/* Cards компонент */}
      <div className="cards">
        <div className="card">
          {characters.map((character) => (
            <div className="avatar">
              <img
                src={character.image}
                alt={character.name}
                className="avatar"
              />
              <div className="content">
                <div className="name">{character.name}</div>
                <div className="species">{character.species}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
