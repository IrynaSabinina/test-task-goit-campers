import { Icons } from "images/icons"
import styles from "./Modal.module.css"


export const Reviews =({camper}) =>{

return (    
        <ul className={styles.detailsList}>
{camper.reviews.map((item, index)=> {
    let stars = [];
   for (let i= 0; i<item.reviewer_rating; i++){
    stars.push(i)
   }
return (<li id = {index}>
<p>{item.reviewer_name}</p>
<ul className={styles.startContainer}>

{stars.map((item, index)=> {
    return <li id={`${item}+${index}`}>
         <Icons name="star" width="20" height="20" />
    </li>
})}
</ul>
<p>
   {item.comment}
</p>
</li>) 
})}
</ul>
// }
    )
}