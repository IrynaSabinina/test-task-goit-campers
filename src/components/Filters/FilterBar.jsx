import { toast } from "react-toastify";
import styles from "./FilterBar.module.css";
import { useState } from "react";

export const FilterBar = ({ onSubmit }) => {
 

  const [searchLocation, setSearch] = useState("");
  const [buttonText, setButtonText] = useState("Search");
  const handleSearchChange = (event) => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchLocation.trim() === "") {
      toast.error("Please enter location");
    }
    onSubmit(searchLocation);
    setSearch("");
    console.log(event.target.innerText)
    if (event.target.innerText === "LocationReset") {
      setButtonText("Search");
    } else {
      setButtonText("Reset");
    }
  };

  return (
    <div className={styles.filterContainer}>
      <form id="searchLocation" onSubmit={handleSubmit}>
        <label for="location" className={styles.label}> Location</label>
          <input
          id="location"
            type="text"
            name="Location"
            autoComplete="off"
            placeholder="Ukraine, Kyiv"
            value={searchLocation}
            onChange={handleSearchChange}
          />
       
        <button className={styles.btnSearch} type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};
