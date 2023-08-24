import { useEffect } from "react";

export default function Search({ heading, query, setQuery }) {
  useEffect(() => {
    console.log("Search run on mount");
  }, []);

  return (
    <section className="Search-wrapper">
      <h2>{heading}</h2>
      <div className="search-box">
        <input
          type="text"
          className="search-box__input"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        🔍
      </div>
    </section>
  );
}
