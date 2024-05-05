import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { getCampersThunk } from "../redux/thunks";
// import  {createBrowserHistory } from 'history';

import { FavoriteList } from "../pages/Favorite/Favorite";
import { NotFound } from "../pages/NoteFound/NotFound";
import { HomePage } from "../pages/Home/HomePage.jsx";
import { Catalog } from "../pages/Catalog/Catalog";

export const App = () => {
  localStorage.setItem("favorites", JSON.stringify([]));
  localStorage.setItem("filtered", JSON.stringify([]));

  localStorage.setItem("favoritesId", JSON.stringify([]));

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCampersThunk());
  }, [dispatch]);

 
  return (
    <>
      <Routes>
        <Route  basename={process.env.PUBLIC_URL} path="/test-task-goit-campers" element={<HomePage />} />
        <Route basename={process.env.PUBLIC_URL} path="/test-task-goit-campers/catalog" element={<Catalog />} />
        <Route  basename={process.env.PUBLIC_URL} path="/test-task-goit-campers/favorites" element={<FavoriteList />} />
       <Route  basename={process.env.PUBLIC_URL} path="/test-task-goit-campers/*" element={<Navigate to="/test-task-goit-campers" replace={true} />}/>
      </Routes>
    </>
  );
};
