import { useSelector } from "react-redux";
import { CampersList } from "../../components/Campers/CampersList"
import { FilterBar } from "../../components/Filters/FilterBar"
import { Header } from "../../components/Header/Header"
import { campersSelector } from "../../redux/selectors";

export const Catalog =()=>{
      const campers = useSelector(campersSelector);
     
      const hendlerFilter=(campers, location, detaile, form)=>{
        const filteredCampers = []
        // for (let i==0; )
// const filteredArray = campers.filter(e => {e.location === location && e.details.detaile && e.form === form})
//           return filteredArray
    }
    
   
    return (
        <>
        <Header/>
        <CampersList/>
        <FilterBar onSubmit={hendlerFilter}/>
        </>
    )
}