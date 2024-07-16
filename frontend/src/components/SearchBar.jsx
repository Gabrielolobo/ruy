import React, { useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const GRAPHQL_HOST = "http://localhost:4000/graphql";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const query = `
      query Search($query: String!) {
        search(query: $query)
      }
    `;

    const variables = { query: value };

    try {
      const response = await fetch(GRAPHQL_HOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("GraphQL response:", result); // Log the response
      const results = result.data.search;
      setResults(results); // Update state with results
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]); // Reset results on error
    }
  };

  const handleChange = (value) => {
    setInput(value);
    if (value) {
      fetchData(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Pesquise um termo..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

