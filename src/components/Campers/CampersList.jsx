import { CamperItem } from "./Camper";
import { campersSelector } from "../../redux/selectors";
import { useSelector } from "react-redux";
import styles from "./CampersList.module.css";
import { useEffect, useState } from "react";
import { ModalSuccess } from "../Modal/Modal";

export const CampersList = () => {
  const currentUrl = window.location.href;
  console.log(currentUrl.toString().substr(currentUrl.length - 5));
  const BtnPagination = document.getElementById("paginationBtn");

  const [id, setId] = useState("");
  const [favoritesId, setFavoritesId] = useState(
    JSON.parse(localStorage.getItem("favoritesId"))
  );
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );
  const campers = useSelector(campersSelector);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setId("");
    }
  });
  document.addEventListener("click", (eve) => {
    if (eve.target.id === "modalBackdrop") {
      setId("");
    }
  });

  const [page, setPage] = useState(1);
  let visibleCampers = campers.slice(0, page * 4);

  useEffect(() => {
    if (page === 4) {
      BtnPagination.disabled = true;
    }
  }, [page, id, currentUrl, BtnPagination, favoritesId]);

  const pagination = (e) => {
    e.preventDefault();

    if (page < 4) {
      setPage((page) => page + 1);
      return (visibleCampers = campers.slice(0, page * 4));
    }
  };
  const togelModal = (event) => {
    event.preventDefault();
    setId(event.target.id.slice(6));
  };
  const closeModal = (eve) => {
    eve.preventDefault();
    setId("");
  };

 const favoritsList = (event) => {
    const id = event.currentTarget.id;
    event.preventDefault();

    if (favoritesId.includes(event.currentTarget.id)) {
      const newArray = favoritesId.filter((e) => e !== id);
      setFavoritesId(newArray);

      localStorage.setItem("favoritesId", JSON.stringify(newArray));
      const newObjArray = favList.filter((e) => e._id !== id);
      setFavList(newObjArray);
      localStorage.setItem("favorites", JSON.stringify(newObjArray));
    } else {
      const addedCamper = campers.find((item) => item._id === id.toString());
      favoritesId.push(addedCamper._id.toString());
      favList.push(addedCamper);
      localStorage.setItem("favoritesId", JSON.stringify(favoritesId));
      localStorage.setItem("favorites", JSON.stringify(favList));
    }
  };

  localStorage.setItem("favoritesId", JSON.stringify(favoritesId));
  localStorage.setItem("favorites", JSON.stringify(favList));

  return (
    <div>
      <div className={styles.containerForCatalog}>
        <ul className={styles.campersList}>
          {currentUrl.toString().substr(currentUrl.length - 5) === "talog" &&
            visibleCampers.map(
              ({
                _id,
                name,
                gallery,
                adults,
                price,
                engine,
                transmission,
                rating,
                location,
                description,
                details,
                reviews,
              }) => {
                return (
                  <CamperItem
                    key={_id}
                    id={_id}
                    name={name}
                    gallery={gallery}
                    price={price}
                    rating={rating}
                    location={location}
                    adults={adults}
                    engine={engine}
                    transmission={transmission}
                    description={description}
                    details={details}
                    reviews={reviews}
                    togelModal={togelModal}
                    favoritsListHendler={favoritsList}
                  />
                );
              }
            )}
          {currentUrl.toString().substr(currentUrl.length - 5) === "rites" &&
            favList.map(
              ({
                _id,
                name,
                gallery,
                adults,
                price,
                engine,
                transmission,
                rating,
                location,
                description,
                details,
                reviews,
              }) => {
                return (
                  <CamperItem
                    key={_id}
                    id={_id}
                    name={name}
                    gallery={gallery}
                    price={price}
                    rating={rating}
                    location={location}
                    adults={adults}
                    engine={engine}
                    transmission={transmission}
                    description={description}
                    details={details}
                    reviews={reviews}
                    togelModal={togelModal}
                    favoritsListHendler={favoritsList}
                  />
                );
              }
            )}
        </ul>
        <button
          className={styles.BtnPagination}
          type="button"
          onClick={pagination}
          id="paginationBtn"
        >
          Load more
        </button>
      </div>
      {id && <ModalSuccess id={id} closeModal={closeModal} />}
    </div>
  );
};
