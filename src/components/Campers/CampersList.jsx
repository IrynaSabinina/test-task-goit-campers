import { CamperItem } from "./Camper";
import {campersSelector, selectCategory} from "../../redux/selectors"
import { useSelector } from 'react-redux';
export const CampersList = () => {
  const campers = useSelector(campersSelector)

// console.log(campers)
  return (
    <div >
      <ul >
        {campers.map(({_id, name, gallery,price, rating,location, description, details}) => {
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
            //  adults= {camper.adults} 
            //  children= {camper.children} 
            //  engine= {camper.engine} 
            //  transmission= {camper.transmission} 
            //  form={camper.form} 
            //  length={camper.length} 
            //  width={camper.width} 
            //  height={camper.height} 
            //  tank={camper.tank}
            //  consumption={camper.consumption} 
             description={description} 
             details={details} 
            //  reviews={camper.reviews}
            />
          );
        })}
      </ul>
    </div>
  );
};