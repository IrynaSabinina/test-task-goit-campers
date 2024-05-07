
import { Header } from "../../components/Header/Header";
import { Icons } from "../../images/icons";
import styles from "./HomePage.module.css";

export const HomePage =()=>{
return <>
<div className={styles.homeContainer}>
  <h1>Choose your best Traveling</h1>
  <article>One of the most significant benefits of traveling with a camper van is the flexibility and freedom it offers for exploration. Unlike traditional car journeys or organized tours, camper van travel allows for spontaneous detours and unplanned stops, providing an opportunity to discover hidden gems and off-the-beaten-path destinations. With a camper van, travelers have the flexibility to design their itinerary, choose their own pace, and explore at their leisure. Whether it's a remote beach, a scenic mountain pass, or a charming small town, 
    the freedom to explore and discover new places is one of the most rewarding aspects of camper van travel.</article>


    
<ul className={styles.blockAtimashki}>
          <li>
            
            <Icons className={styles.redCar} name="van"
stroke= "#101828"
color = "red"
          width="164"
          height="164"/>
            </li>
            <li>

          <Icons className={styles.yellowCar} name="fully"
stroke= "#101828"
color = "yellow"
          width="164"
          height="164"/>
            </li>
            <li>

  <Icons className={styles.green} name="alcove"
stroke= "#101828"
color = "green"
          width="164"
          height="164"/>
            </li>
</ul>
</div>
</>
}