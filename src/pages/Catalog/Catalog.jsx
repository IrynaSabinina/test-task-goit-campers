import { useSelector } from "react-redux";
import { CampersList } from "../../components/Campers/CampersList"
import { FilterBar } from "../../components/Filters/FilterBar"
import { Header } from "../../components/Header/Header"
import styles from "../Home/HomePage.module.css"


export const Catalog =()=>{
  
     
      const hendlerFilter=(campers, location, detaile, form)=>{
        

    }
    
   
    return (
        <>
        <div className={styles.homeContainer}>

        <Header/>
        </div>
        <CampersList/>
        <FilterBar onSubmit={hendlerFilter}/>
        </>
    )
}