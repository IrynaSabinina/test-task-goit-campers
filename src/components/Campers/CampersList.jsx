import { CamperItem } from "./Camper";

import styles from "./CampersList.module.css";

import { ModalSuccess } from "../Modal/Modal";
import { useEffect, useState } from "react";

export const CampersList = ({visibleCampers,id, pagination,favoritsList, togelModal, closeModal}) => {
  const favoritList = JSON.parse(localStorage.getItem("favoritesId"))



  return (
    <div>
      <div className={styles.containerForCatalog}>
        <ul className={styles.campersList}>
          
           { visibleCampers?.map(
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
