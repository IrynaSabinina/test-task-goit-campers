import { toast } from "react-toastify";
import styles from "./FilterBar.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { campersSelector } from "../../redux/selectors";

export const FilterBar = ({ onSubmit }) => {
  const campers = useSelector(campersSelector);

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
    if (event.target.innerText === "LocationReset") {
      setButtonText("Search");
    } else {
      setButtonText("Reset");
    }
  };

  return (
    <div className={styles.filterContainer}>
      <form id="searchLocation" onSubmit={handleSubmit}>
        <label className={styles.label}>
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
