import React from 'react';
import {FaHamburger, FaPizzaSlice} from "react-icons/fa";
import {GiChopsticks, GiNoodles} from "react-icons/gi";
import './main.scss'
import {NavLink} from "react-router-dom";
const Category = () => {
    return (
        <div className='category'>
            <NavLink to={'recipe/italian'} className="category_part">
                <FaPizzaSlice/>
                <h6>italian</h6>
            </NavLink>
            <NavLink to={'recipe/american'} className="category_part">
                <FaHamburger/>
                <h6>american</h6>
            </NavLink>
            <NavLink to={'recipe/thai'} className="category_part">
                <GiNoodles/>
                <h6>thai</h6>
            </NavLink>
            <NavLink to={'recipe/japanese'} className="category_part">
                <GiChopsticks/>
                <h6>japanese</h6>
            </NavLink>
        </div>
    );
};

export default Category;
