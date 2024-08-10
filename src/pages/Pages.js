import React from 'react';
import Home from "./Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Recipe from "./Recipe";
import Category from "../components/Category";
import Search from "../components/Search";
import Searched from "./Searched";
import ShowRecipe from "./ShowRecipe";
import Header from "../components/Header";

const Pages = () => {
    return (
        <>
            <h1 className='header_title'>پروژه react</h1>
            <BrowserRouter>
                <Header/>
                <Search/>
                <Category/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/recipe/:type'} element={<Recipe/>}/>
                    <Route path={'/searched/:search'} element={<Searched/>}/>
                    <Route path={'/showRecipe/:id'} element={<ShowRecipe/>}/>
                </Routes>

            </BrowserRouter>
        </>
    );
};

export default Pages;