import { useSelector } from "react-redux";
import { CampersList } from "../../components/Campers/CampersList"
import { FilterBar } from "../../components/Filters/FilterBar"
import { Header } from "../../components/Header/Header"


export const Catalog =()=>{
  
     
      const hendlerFilter=(campers, location, detaile, form)=>{
        

    }
    
   
    return (
        <>
        <Header/>
        <CampersList/>
        <FilterBar onSubmit={hendlerFilter}/>
        </>
    )
}