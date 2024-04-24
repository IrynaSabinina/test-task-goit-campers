import { CamperItem } from "./Camper";
import {campersSelector, selectCategory} from "../../redux/selectors"
import { useSelector } from 'react-redux';
import styles from './CampersList.module.css';
export const CampersList = () => {
  const campers = useSelector(campersSelector)
  // console.log(visibleCampers)
//   let page = 1;
//   let visibleCampers = campers.slice(0,page*4);
// function pagination(){
  
// page = page++;
// console.log(page)
//   return visibleCampers = campers.slice(0,(page*4))

// }
// console.log(visibleCampers)
  return (
    <div >
      <ul className={styles.campersList}>
        {campers.map(({_id, name, gallery,adults, price,engine,transmission, rating,location, description, details, reviews}) => {
          return (
            <CamperItem
              key={_id}
              // camper={camper}
              id={_id}
              name={name}
              gallery={gallery}
             price= {price}
             rating= {rating} 
             location={location} 
             adults= {adults} 
            //  children= {camper.children} 
             engine= {engine} 
             transmission= {transmission} 
            //  form={camper.form} 
            //  length={camper.length} 
            //  width={camper.width} 
            //  height={camper.height} 
            //  tank={camper.tank}
            //  consumption={camper.consumption} 
             description={description} 
             details={details} 
             reviews={reviews}
            />
          );
        })}
      </ul>
      {/* <button type="button" onClick={pagination}> Load more</button> */}
    </div>
  );
};