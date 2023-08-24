import "../styles.css";

import { useState, useEffect } from "react";

import Navigation from "./Navigation";
import Results from "./Results";
import Search from "./Search";

export default function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  async function handleFetch() {
    try {
      console.log("triggering fetch");
      // setShowSearch(!showSearch);

      // fetch call goes here
    } catch (err) {
      console.log(err);
    }
  }

  // useEffects Here

  return (
    <div className="holy-grail">
      <header>
        <Navigation brand="JSON API Demo" />
      </header>

      <main className="holy-grail__main">
        <aside className="holy-grail__left bg-light"></aside>

        <article className="holy-grail__middle">
          <button onClick={handleFetch}> Trigger Fetch </button>
          {showSearch && (
            <Search
              heading={results.length ? "Search Results" : "Search"}
              query={query}
              setQuery={setQuery}
              // search is a controlled input - data added to input updates the results variable
            />
          )}
          <Results />
        </article>

        <nav className="holy-grail__right bg-light"></nav>
      </main>
      <footer className="bg-dark txt-center">
        Copyright{" "}
        <span role="img" aria-label="copyright-logo">
          ©️
        </span>{" "}
        2023
      </footer>
    </div>
  );
}
