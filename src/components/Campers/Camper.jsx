import PropTypes from 'prop-types';
// import styles from './CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { campersSelector } from '../../redux/selectors';
// import { deleteContactThunk } from '../../redux/thunks/thunks';

export const CamperItem = ({ id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews }) => {
  return (
    <li id ={id} >
      <img src={gallery[0]} alt={name}/>

     <h2>{name}</h2>  <p>{price}</p> 
     <p>{rating}</p> 
     <p>{location}</p> 
     <p>{description}</p>
     <ul>
      <li>
        {adults} aults
      </li>
      <li>{transmission}</li>
      <li>{engine}</li>
{details.kitchen && (<li>kitchen</li>)}
      <li>{details.beds} beds</li>
      {details.airConditioner && (<li>AC</li>)}
    
     </ul>
     {/* {adults} {children} {engine} {transmission} {form} {length} {width}, {height}, {tank}, {consumption}, {description}, {details}, {gallery}, {reviews} */}
    </li>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };