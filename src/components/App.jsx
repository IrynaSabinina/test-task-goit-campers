import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getCampersThunk } from "../redux/thunks";

import { FavoriteList } from "../pages/Favorite/Favorite";
import { NotFound } from "../pages/NoteFound/NotFound";
import { HomePage } from "../pages/Home/HomePage.jsx";
import { Catalog } from "../pages/Catalog/Catalog";

export const App = () => {
  localStorage.setItem("favorites", JSON.stringify([]));

  localStorage.setItem("favoritesId", JSON.stringify([]));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersThunk());
  }, [dispatch]);

 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<FavoriteList />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
