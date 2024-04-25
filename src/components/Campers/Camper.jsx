import PropTypes from 'prop-types';
import styles from './CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { campersSelector } from '../../redux/selectors';

import { Icons } from '../../images/icons.js';
import { Modal } from '../Modal/Modal';
// import { deleteContactThunk } from '../../redux/thunks/thunks';

export const CamperItem = ({ id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews }) => {
const BtnModal = document.querySelector(`#button${id}`)

// console.log(BtnModal)
const hendlerModalOpen =(e) =>{
// console.log(e.target.id)

 
e.preventDefault()
console.log(id)
}
  return (
    <li className={styles.campersItem} id ={id} >
      <img className={styles.camperImg} src={gallery[0]} alt={name} />
<div className={styles.infoBlock}>
<div className={styles.titleBlock}>

     <h2>{name}</h2>  <p>€{price} <Icons name="favorite"
stroke="currentColor"
          width="20"
          height="20"/>
          </p>
</div>
<div className={styles.locationBlock}>
     <p><Icons name="star"
          width="20"
          height="20"/>{rating}<span>({reviews.length} Reviews)</span></p> 
     <p><Icons name="location"

          width="20"
          height="20"/>{location}</p> 
</div>
     <p>{description.slice(0,80)}...</p>
     <ul className={styles.detailsList}>
      <li>
        <Icons name="adults"
          color="black"
          width="20"
          height="20"/>
        <span>{adults} adults</span>
      </li>
      <li><Icons name="transmission"
          color="black"
          width="20"
          height="20"
          />
        {transmission}</li>
      <li><Icons name="engine"
          color="black"
          width="20"
          height="20"
          />{engine}</li>
{details.kitchen && (<li><Icons name="kitchen"
          color="black"
          width="20"
          height="20"
          />kitchen</li>)}
      <li><Icons name="beds"
      stroke="none"
          width="20"
          height="20"
          />{details.beds} beds</li>
      {details.airConditioner && (<li><Icons name="ac"
     
          width="20"
          height="20"
          />AC</li>)}
     </ul>
     <button className={styles.btnShowMore} type="button" id={`button${id}`} onClick={hendlerModalOpen}>Show more</button>
</div>
    </li>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };