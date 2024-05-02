import { Icons } from "images/icons"
import { nanoid } from "nanoid"

export const Reviews =({camper}) =>{
    console.log(camper)
    console.log(camper.reviews.length)
  const raitingIcons =(camp)=>{
    let rating = camp?.reviewer_rating
if (!rating){
    console.log("nooo")
    return
} else if (rating >0) {
    console.log("nooo2")
    for (let i =0; i< camper?.reviewer_rating; i++ ) {
    return (
       < li>
    <Icons name="star" width="20" height="20" />
       </li>
    )
}
    }

}
// if(array.length > 0){
//   return array.map(function(each){
//     return(<h1>hello {each.name}</h1>)
//   })
// } else {
//   return []
// }
return (
    //    { camper.reviews.length &&    
        <ul>
{camper.reviews.map((item, index)=> {
    console.log(item)
return (<li id = {index}>
<p>{item.reviewer_name}</p>
<ul>
 {}
    {raitingIcons(item)}
    {/* raitingIcons(item) */}
</ul>
<p>
   {item.item}
</p>
</li>) 
})}
</ul>
// }
    )
}