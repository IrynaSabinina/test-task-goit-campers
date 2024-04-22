import { CamperItem } from "./Camper";
import {campersSelector, selectCategory} from "../../redux/selectors"
import { useSelector } from 'react-redux';
export const CampersList = () => {
  const campers = useSelector(campersSelector)


  return (
    <div >
      <h2 >Contacts</h2>
      <ul >
        {campers.map(({ _id, name}) => {
         
          return (
            <CamperItem
              key={_id}
              id={_id}
              name={name}
            //  price= {price}
            //  rating= {rating} 
            //  location={location} 
            //  adults= {adults} 
            //  children= {children} 
            //  engine= {engine} 
            //  transmission= {transmission} 
            //  form={form} 
            //  length={length} 
            //  width={width} 
            //  height={height} 
            //  tank={tank}
            //  consumption={consumption} 
            //  description={description} 
            //  details={details} 
            //  gallery={gallery} 
            //  reviews={reviews}
            
              
            />
          );
        })}
      </ul>
    </div>
  );
};