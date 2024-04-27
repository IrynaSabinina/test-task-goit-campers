import { useSelector } from "react-redux";
import { campersSelector } from "../../redux/selectors";
import style from "../Campers/CampersList.module.css";
import styles from "./Modal.module.css";
import { Icons } from "../../images/icons";
import { BookingBlock } from "./BookingBlock";
import { Features } from "./Features";

export const ModalSuccess = ({ id, closeModal }) => {
  const campers = useSelector(campersSelector);

  const camper = campers.find((item) => item._id === id.toString());

  return (camper ? (
    <div id="modalBackdrop" className={styles.backdrop}>
      <div id="myModal" className={styles.container}>
        <div id="myModalHeader" className={styles.modalHeader}>
          <h2 className={styles.modalHeaderText}>{camper.name}</h2>
          <button type="button" onClick={closeModal}>
            <Icons name="close" color="black" stroke width="20" height="20" />
          </button>

          <div className={style.locationBlock}>
            <p className={style.raiting}>
              <Icons name="star" width="20" height="20" />
              {camper.rating}
              <span>({camper.reviews.length} Reviews)</span>
            </p>
            <p>
              <Icons name="location" width="20" height="20" />
              {camper.location}
            </p>
          </div>

          <p className={style.price}>€{camper.price}</p>
        </div>
        <div className={styles.modalInfo}>
          <ul className={styles.gallery}>
            {camper.gallery.map((item, index) => {
              return (
                <li key={index} className={styles.camperImgModal}>
                  <img
                    className={styles.camperImgModal}
                    src={item}
                    alt={camper.name}
                  ></img>
                </li>
              );
            })}
          </ul>
          <p className={styles.descriptionModal}>{camper.description}</p>

          <div className={styles.clientsBlock}>
            <div className={styles.clientsBlockHeaders}>
              <button id="features">
                Features
              </button>
              <button id="reviews">Reviews</button>
            </div>
            <div className={styles.sectionTableCalendar}>
              <Features camper={camper} />
              <BookingBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  ));
};
