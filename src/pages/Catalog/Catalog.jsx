import { useSelector } from "react-redux";
import { CampersList } from "../../components/Campers/CampersList"
import { FilterBar } from "../../components/Filters/FilterBar"
import { Header } from "../../components/Header/Header"
import styles from "../Home/HomePage.module.css"
import { useEffect, useState } from "react";
import { campersSelector } from "../../redux/selectors";


export const Catalog =()=>{
  

  const BtnPagination = document.getElementById("paginationBtn");
  const campers = useSelector(campersSelector);
  console.log(campers)

  const [id, setId] = useState("");
  const [favoritesId, setFavoritesId] = useState(
    JSON.parse(localStorage.getItem("favoritesId"))
  );
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );
  const [page, setPage] = useState(1);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setId("");
    }
  });
  document.addEventListener("click", (eve) => {
    if (eve.target.id === "modalBackdrop") {
      setId("");
    }
  });

  let visibleCampers = campers?.slice(0, page * 4);
 
  useEffect(() => {
    if (page === 4) {
      BtnPagination.disabled = true;
    }
  }, [page, id]);
  
  const pagination = (e) => {
    e.preventDefault();
    
    if (page < 4) {
      setPage((page) => page + 1);
      return (visibleCampers = campers?.slice(0, page * 4));
    }
  };
  const togelModal = (event) => {
    event.preventDefault();
    setId(event?.target.id.slice(6));
  };
  const closeModal = (eve) => {
    eve.preventDefault();
    setId("");
  };
  
  const favoritsList = (event) => {
    const id = (event.currentTarget.id);
    const BtnF = document.getElementById(`svg${id}`)
    event.preventDefault();
    
    if (favoritesId.includes(event.currentTarget.id)) {
      const newArray = favoritesId.filter((e) => e !== id);
      setFavoritesId(newArray);
      BtnF.setAttribute("fill","none")
      
      localStorage.setItem("favoritesId", JSON.stringify(newArray));
      const newObjArray = favList.filter((e) => e._id !== id);
      setFavList(newObjArray);
      localStorage.setItem("favorites", JSON.stringify(newObjArray));
    } else {
      const addedCamper = campers.find((item) => item._id === id.toString());
      favoritesId.push(addedCamper._id.toString());
      favList.push(addedCamper);
      BtnF.setAttribute("fill","red")
      localStorage.setItem("favoritesId", JSON.stringify(favoritesId));
      localStorage.setItem("favorites", JSON.stringify(favList));
    }
  };
  
  localStorage.setItem("favoritesId", JSON.stringify(favoritesId));
  localStorage.setItem("favorites", JSON.stringify(favList));
  
  const hendlerFilter=(campers, location, detaile, form)=>{
    
    
  }
    
   
    return (
        <>
        <div className={styles.homeContainer}>

        <Header/>
        </div>
        <CampersList visibleCampers={visibleCampers} id={id} pagination={pagination} togelModal={togelModal} closeModal={closeModal} favoritsList={favoritsList}/>
        <FilterBar onSubmit={hendlerFilter}/>
        </>
    )
}