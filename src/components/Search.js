import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const formSubmit = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }
    return (
        <div className='form_box'>
            <FaSearch className='icon_search'/>
            <form onSubmit={formSubmit} className='form' action="">
                <input onChange={handleInput} value={input} name={'serach'} className='form-control' type="text"/>
            </form>

        </div>
    );
};

export default Search;
