import { useSelector } from "react-redux"
import { campersSelector } from "../../redux/selectors"
import styles from"./Modal.module.css";
import { useEffect } from "react";
import { Icons } from "../../images/icons";
import { BookingBlock } from "./BookingBlock";
import { Features } from "./Features";


export const Modal = ({ id, open, close}) =>{
const BtnModal = document.getElementById(id)

const campers = useSelector(campersSelector)

const camper = campers.find((item)=> 
item._id === String(id));
// console.log(camper.gallery)
// const gallery = camper.gallery
return (
camper ? (

<div id="modal" className={styles.backdrop} >
<div className={styles.container} >
    <div>
    <h2>{camper.name}</h2>
<Icons name="close"
color="black"
stroke
          width="20"
          height="20"/>
    </div>
<div className={styles.locationBlock}>
     <p><Icons name="star"
          width="20"
          height="20"/>{camper.rating}<span>({camper.reviews.length} Reviews)</span></p> 
     <p><Icons name="location"

          width="20"
          height="20"/>{camper.location}</p> 
</div>

<p>€{camper.price}</p>
<ul className={styles.gallery}>
           
 {camper.gallery.map((item, index) => {
        return (
            <li key={index} className={styles.camperImgModal}>
                <img className={styles.camperImgModal} src={item} alt={camper.name} ></img>
            </li>
            )
    })

            }
        </ul>
        <p className={styles.descriptionModal}>{camper.description}</p>

<div className={styles.clientsBlock}>
    <div className={styles.clientsBlockHeaders}>
        <button id="features" active>Features</button>
         <button id="reviews">Reviews</button>
    </div>
    <Features camper = {camper}/>
<BookingBlock/>
</div>
        </div>


</div>
):<></>

)
}