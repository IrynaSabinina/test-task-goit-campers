import { useEffect, useState } from "react";

import { CamperItem } from "../../components/Campers/Camper";
import { campersSelector } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { ModalSuccess } from "../../components/Modal/Modal";
import { Header } from "../../components/Header/Header";

export const FavoriteList = () => {
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
  }, [page, id, currentUrl]);

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
    <>
      <Header />
      {favoritesId.length ? (<ul>
        {favList.map(
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
     ) :<p>this list still empry! Try to add 1 st Camper here!</p>  }
      {id && <ModalSuccess id={id} closeModal={closeModal} />}
      
    </>
  );
};
