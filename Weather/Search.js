import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, options } from "./api";

//! Step:2  pass into this function then go to weather.js
const Search = ({ onSearchChange }) => {
  const [search, setSeach] = useState(null);

  const loadOptions = async (inputValues) => {
    debugger;
    try {
      const response = await fetch(
        `${url}/cities?minPopulation=1000000&namePrefix=${inputValues}`,
        options
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error, "Error in Weather-> search.js");
    }
  };

  //! This function hits when you click option data
  const handleOnChange = (searchData) => {
    debugger;
    setSeach(searchData);
    //! Step:1 important i want to pass a search data from Search to weather component then go to step 2
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
