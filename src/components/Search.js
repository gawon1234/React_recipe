import {React, useState} from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Search = () => {

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const getResult = () => {
        console.log(`search keyword = ${keyword}`);
        navigate(`./search/${keyword}`);
    };

    return (
        <SearchDiv>
            <input onChange ={ (e) => setKeyword(e.target.value) } value={keyword} />
            <button onClick={ () => getResult()  } >Search</button>



        </SearchDiv>
    )
};


const SearchDiv = styled.div`
    background-color : yellow;
    position : relative;
    width : 100%;

    input{
        background : black;
        font-size : 1.5rem;
        color : white;
    }
    svg{
        font-color : white;
    }
`;

export default Search