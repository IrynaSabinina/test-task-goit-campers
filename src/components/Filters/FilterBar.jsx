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
      
    } else {

      setSearch("");
      onSubmit(searchLocation);
     
    }
    if (event.target.innerText === "Location\nReset" && searchLocation.trim().length>0) {
      setButtonText("Search");
    } else if (event.target.innerText === "Location\nSearch" && searchLocation.trim().length>0) {
      setButtonText("Reset");
    }
  };

  return (
    <div className={styles.filterContainer}>
      <form id="searchLocation" onSubmit={handleSubmit}>
        <label  className={styles.label}> 
        Location
          <input
         
            type="text"
            name="Location"
            autoComplete="off"
            placeholder="Ukraine, Kyiv"
            value={searchLocation}
            onChange={handleSearchChange}
          />
        </label>
       
        <button className={styles.btnSearch} type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};
