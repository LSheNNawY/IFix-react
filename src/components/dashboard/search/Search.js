import React, { useState } from "react";
import axios from "axios";

export default function Search({ setResult, searchFor }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}/${searchFor}?search=${search}`)
      .then(({ data }) => {
        setResult(data);
      })
      .catch(({ response }) => {
        console.log(response);
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
