import React, { useState } from "react";
import axios from "axios";

export default function Search({ setResult, searchFor, setTotalPages }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}/${searchFor}?search=${search}`)
      .then(({ data }) => {
        console.log(data);
        setResult(data[searchFor]);
        setTotalPages(data.totalPages)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          name="search"
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
      </form>
    </>
  );
}
