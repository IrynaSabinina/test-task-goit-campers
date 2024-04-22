import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../API/helpers";

import { getCampersThunk } from "../redux/thunks";
import {campersSelector} from "../redux/selectors"
import { CampersList } from "./Campers/CampersList";
// import "./App.css";

export const App = () => {
    const campers = useSelector(campersSelector)
  const dispatch = useDispatch();
    
  useEffect(() => {
  dispatch(getCampersThunk());
  }, [dispatch]);

  // const campers = getCampersThunk();
  console.log(campers);
  return <CampersList campers = {campers}></CampersList>;
}


