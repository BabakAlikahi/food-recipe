import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Row} from "reactstrap";
import './pages.scss'

const ShowRecipe = () => {
    const [detail, setDetail] = useState({});
    const [active, setActive] = useState('part1')
    const params = useParams();
    const showRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetail(detailData);
        console.log(detail)
    }
    useEffect(() => {
        showRecipe();
    }, [params])
    return (
        <div className='show_recipe'>
            <Row className='m-0 p-0'>
                <div className="col-7 show_recipe_text">
                    <div className="btns">
                        <p className={active === 'part1' ? 'active' : ''} onClick={() => {
                            setActive('part1')
                        }}>دستور پخت</p>
                        <p className={active === 'part2' ? 'active' : ''} onClick={() => {
                            setActive('part2')
                        }}>مواد تشکیل دهنده</p>
                    </div>
                    <div className="summery_part">
                        <p dangerouslySetInnerHTML={{__html: detail.summary}}></p>
                        {active === 'part1' ?
                            <>
                                <h5>دستور پخت</h5>
                                <p dangerouslySetInnerHTML={{__html: detail.instructions}}></p>
                            </>
                            :
                            <>
                                <h5>مواد تشکیل دهنده</h5>
                                <ul>
                                    {detail.extendedIngredients.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                {item.original}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>

                        }

                    </div>
                </div>
                <div className="col-5 show_recipe_img">
                    <p>{detail.title}</p>
                    <img src={detail.image} alt=""/>
                </div>
            </Row>
        </div>
    );
};

export default ShowRecipe;
