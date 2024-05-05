import { Icons } from "images/icons"
import styles from "./Modal.module.css"


export const Reviews =({camper}) =>{

return (    
        <ul className={styles.detailsListReviews}>
{camper.reviews.map((item, index)=> {
    let stars = [];
   for (let i= 0; i<item.reviewer_rating; i++){
    stars.push(i)
   }
return (<li id = {`reviewer_rating+${item}+${index}`} className={styles.comments}>
    <div className={styles.reviewHeader}>
    <div className={styles.nickForm}>{item.reviewer_name[0]}</div>
    <div className={styles.raitingName}>
<p>{item.reviewer_name}</p>
<ul className={styles.startContainer}>

{stars.map((item, index)=> {
    return <li id={`stars+${item}+${index}`}>
         <Icons name="star" width="20" height="20" />
    </li>
})}
</ul>
    </div>
    </div>
<p>
   {item.comment}
</p>
</li>) 
})}
</ul>
// }
    )
}