import PropTypes from 'prop-types';
// import styles from './CampersList.module.css';
import { useDispatch } from 'react-redux';
// import { deleteContactThunk } from '../../redux/thunks/thunks';

export const CamperItem = ({ id, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews }) => {
    const dispatch = useDispatch();
   
    // const handleDelete = _id => {
 
    // dispatch(deleteContactThunk(_id));
    

//   };
  return (
    <li id ={id} >
      {name}, {price}, {rating}, {location}, {adults}, {children}, {engine}, {transmission}, {form}, {length}, {width}, {height}, {tank}, {consumption}, {description}, {details}, {gallery}, {reviews}
     
    </li>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };