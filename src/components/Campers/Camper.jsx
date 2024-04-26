import PropTypes from 'prop-types';
import styles from './CampersList.module.css';
import { Icons } from '../../images/icons.js';
import { useEffect, useState } from 'react';



export const CamperItem = ({ favoritsListHendler, togelModal,id, name, price, rating, location, adults, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews }) => {
  const favoritList = JSON.parse(localStorage.getItem("favoritesId"))
  console.log(favoritList)
  console.log(id)

 const [inFavoriteList, setInFavoriteList] = useState(favoritList.includes(id) )
 useEffect (() => {

  favoritList.includes(id) ? setInFavoriteList(true):setInFavoriteList(false)
  

  }, []);
 
  
  return (
    <li className={styles.campersItem} id ={id} >
      <img className={styles.camperImg} src={gallery[0]} alt={name} />
<div className={styles.infoBlock}>
<div className={styles.titleBlock}>

     <h2>{name}</h2>  <p>€{price} <button id={id} type='button' onClick={favoritsListHendler}>
      
      <Icons name="favorite"
stroke= {favoritList.includes(id)? "red":"#101828"} 
color = {favoritList.includes(id) ? "red":"none"}
          width="20"
          height="20"/></button>
          </p>
</div>
<div className={styles.locationBlock}>
     <p className={styles.raiting}><Icons  name="star"
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
      {details.airConditioner && (<li><Icons name="airConditioner"
     
          width="20"
          height="20"
          />AC</li>)}
     </ul>
     <button className={styles.btnShowMore} type="button" id={`button${id}`} onClick={togelModal}>Show more</button>
  
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