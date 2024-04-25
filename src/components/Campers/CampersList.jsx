import { CamperItem } from "./Camper";
import {campersSelector, selectCategory} from "../../redux/selectors"
import { useSelector } from 'react-redux';
import styles from './CampersList.module.css';
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";

export const CampersList = () => {
const BtnPagination = document.getElementById("paginationBtn")

  const campers = useSelector(campersSelector)
   

const [page, setPage] = useState(1)
  let visibleCampers = campers.slice(0,page*4);

 useEffect(() => {
 visibleCampers=campers.slice(0,(page*4))
 if (page===4)
    {BtnPagination.disabled = true;}
  }, [page]);


const pagination=(e)=>{
  e.preventDefault();
  console.log(visibleCampers.leght)
  if (page < 4){
    setPage(page => page+1);
    return visibleCampers = campers.slice(0,page*4);
  } 
}

  return (
    <div >
      <ul className={styles.campersList}>
        {visibleCampers.map(({_id, name, gallery,adults, price,engine,transmission, rating,location, description, details, reviews}) => {
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
      <button type="button" onClick={pagination} id="paginationBtn"> Load more</button>
       <Modal id={"2"}></Modal>
    </div>
  );
};