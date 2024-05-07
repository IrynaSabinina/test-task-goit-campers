import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { getCampersThunk } from "../redux/thunks";

import { FavoriteList } from "../pages/Favorite/Favorite";
// import { NotFound } from "../pages/NoteFound/NotFound";
import { HomePage } from "../pages/Home/HomePage.jsx";
import { Catalog } from "../pages/Catalog/Catalog";
import { Loader } from "./Loader/Loader";
import Layout from "./Layout/Layout";


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
     <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
      <Routes>
          <Route path="/" element={<Layout />}>

        <Route index path="/" element={<HomePage />} />
        <Route basename={process.env.PUBLIC_URL} path="/catalog" element={<Catalog />} />
        <Route  basename={process.env.PUBLIC_URL} path="/favorites" element={<FavoriteList />} />
       {/* <Route  basename={process.env.PUBLIC_URL} path="/test-task-goit-campers/*" element={<NotFound/>}/> */}
       <Route  basename={process.env.PUBLIC_URL} path="/*" element={<Navigate to="/" replace={true}/>}/>
          </Route>
      </Routes>
      </Suspense>
    </>
  );
};
