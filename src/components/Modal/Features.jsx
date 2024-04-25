import { Icons } from "../../images/icons.js"
import styles from "../Campers/CampersList.module.css"
export const Features =({camper}) =>{
    // console.log(camper)
    return (
 <ul className={styles.detailsList}>
      <li>
        <Icons name="adults"
          color="black"
          width="20"
          height="20"/>
        <span>{camper.adults} adults</span>
      </li>
      <li><Icons name="transmission"
          color="black"
          width="20"
          height="20"
          />
        {camper.transmission}</li>
      <li><Icons name="engine"
          color="black"
          width="20"
          height="20"
          />{camper.engine}</li>
{camper.details?.kitchen && (<li><Icons name="kitchen"
          color="black"
          width="20"
          height="20"
          />kitchen</li>)}
      {camper.details?.beds && (<li><Icons name="beds"
      stroke="none"
          width="20"
          height="20"
           />
    {camper.details?.beds} beds</li> )}
      {camper.details?.airConditioner && (<li><Icons name="ac"
          width="20"
          height="20"
          />AC</li>)}
     </ul>
    )
}