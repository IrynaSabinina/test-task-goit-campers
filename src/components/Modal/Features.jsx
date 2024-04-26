import { nanoid } from "nanoid"
import { Icons } from "../../images/icons.js"
import styles from "../Campers/CampersList.module.css"
import style from "./Modal.module.css"
export const Features =({camper}) =>{
    
 
    return ( 
    <div className={style.featureContainer}>
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
       
                 {Object.entries(camper.details).map((item)=> {
                   let shownName;
                   if (item[0] === "airConditioner") {
                    shownName = "AC"
                   } else {
                   shownName = item[0]
                   }
                   return (
                     item[1] && item[0]!=="bathroom" ?  <li key={nanoid()} id={nanoid()}><Icons name={item[0]}
                 color="black"
                 width="20"
                 height="20"
                 /> 
                 {item[1] > 1 && item[1] < 10  ?   <span>{item[1]}</span> :<></> }  {shownName}</li> :<></>
                   )
                 })}
            </ul>
            <h4>Vehicle details</h4>
<table>
    <tbody className={style.modalTable}>
<tr>
    <td>Form</td>
    <td>{camper.form}</td>
  </tr>
  <tr>
    <td>Length</td>
    <td>{camper.length}</td>
  </tr>
  <tr>
    <td>Width</td>
    <td>{camper.width}</td>
  </tr>
  <tr>
    <td>Height</td>
    <td>{camper.height}</td>
  </tr>
    <tr>
    <td>Tank</td>
    <td>{camper.tank}</td>
  </tr>
    <tr>
    <td>Consumption</td>
    <td>{camper.consumption}</td>
  </tr>
    </tbody>
  </table>
    </div>
    )
}