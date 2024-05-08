import { useSelector } from "react-redux";
import { CampersList } from "../../components/Campers/CampersList"
import { FilterBar } from "../../components/Filters/FilterBar"
import styles from "../Home/HomePage.module.css"
import style from "./Catalog.module.css"
import { useEffect, useState } from "react";
import { campersSelector } from "../../redux/selectors";
import { toast } from "react-toastify";


export const Catalog =()=>{

  const BtnPagination = document.getElementById("paginationBtn");
  const campers = useSelector(campersSelector);

  const [id, setId] = useState("");
  const [favoritesId, setFavoritesId] = useState(
    JSON.parse(localStorage.getItem("favoritesId"))
  );
  
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );
  const [page, setPage] = useState(1);
  const [filtered, setFiltered]= useState(JSON.parse(localStorage.getItem("filtered")))
  
  useEffect(() => {
    if (page === 4) {
      BtnPagination.disabled = true;
    }
  }, [page, id, filtered[0]]);

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
  
  let visibleCampers = filtered[0] ? filtered.slice(0, page * 4): campers?.slice(0, page * 4);
 
  const onSubmit =(searchLocation)=>{
  
  const filteredList= []
  campers.filter((e) => {
    const city = e.location.toLowerCase().split(" ")[1]
    if(city=== searchLocation){
      filteredList.push(e)
    } 
  });
  if (filteredList.length===0 ){
    toast("Sorry, try another location!")
  }
  
  setFiltered(filteredList)
  localStorage.setItem("filtered", JSON.stringify(filteredList));

}
 
  return (<>
        <div className={styles.homeContainer}>
        </div>
    <div className={style.catalogContainer}>
        <FilterBar onSubmit={onSubmit} />
           <CampersList visibleCampers={visibleCampers} id={id} pagination={pagination} togelModal={togelModal} closeModal={closeModal} favoritsList={favoritsList}/>
        </div>
  </>
    )
}