import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Row} from "reactstrap";
import './pages.scss';

const Recipe = () => {
    const [value, setValue] = useState([]);
    const params = useParams();
    const getRecipe = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setValue(recipes.results);
        console.log(value)
    }
    useEffect(() => {
        getRecipe(params.type);
    }, [params])
    return (
        <div className='recipe'>
            <Row className='m-0 p-0'>
                {value.map((item, index) => {
                    return (
                        <div key={index} className="col-3 recipe_col">
                            <div className="recipe_box">
                                <Link to={'/showRecipe/'+item.id}>
                                <img src={item.image} alt={item.title}/>
                                <div className="recipe_content">
                                    <h5>{item.title.substring(0, 25)}...</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Row>
        </div>
    );
};

export default Recipe;
