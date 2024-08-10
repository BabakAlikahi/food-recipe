import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import './main.scss'
import {Link} from "react-router-dom";
const Veggie = () => {
    const [veggie, setVeggie] = useState([])
    const getVeggie = async () => {
        const check= localStorage.getItem('veggie');
        if (check){
            setVeggie(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie',JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }

    }
    useEffect(() => {
        getVeggie();
    }, []);
    return (
        <div className='popular'>
            <h3 className='popular_title'>سبزیجات</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                direction: 'rtl',
                gap: '2rem'
            }}>

                {veggie.map((item, index) => {
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

export default Veggie;
