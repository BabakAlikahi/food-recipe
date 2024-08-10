import React, {useEffect, useState} from 'react';
import './main.scss'
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Link} from "react-router-dom";


const Popular = () => {
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const check= localStorage.getItem('popular');
        if (check){
            setPopular(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data = await api.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }

    }
    useEffect(() => {
        getPopular();
    }, []);

    return (

        <div className='popular'>
            <h3 className='popular_title'>پر بازدید ها</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                direction: 'rtl',
                gap: '2rem'
            }}>

                {popular.map((item, index) => {
                    return (
                        <SplideSlide key={index}>
                            <div >
                                <Link to={'/showRecipe/'+item.id}>
                                <img className='popular_img' src={item.image} alt={item.title}/>
                                <p className='popular_text'>{item.title.substring(0, 15)}...</p>
                                </Link>
                            </div>
                        </SplideSlide>
                    )
                })}

            </Splide>

        </div>
    );
};

export default Popular;
