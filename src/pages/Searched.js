import {React, useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Searched = () => {
    
    const [result, setResult] = useState([]);
    let keyword = useParams().keyword;

    const fetchResult = async (keyword) => {

        const response = await fetch(`https://api.spoonacular.com/recipes/${keyword}/information?apiKey=829403a1713b43dc86245a7c68f78c20`);
        const data = await response.json(); 
        console.log(data.results);
        setResult(data.results);
    };

    useState(()=> {
        fetchResult(keyword);
    } , [keyword]);

  return (
    <Grid>
            
        {
            result.map((ele, index) => {
                return (
                    <Card key={ele.id} > 
                            <img src={ele.image}  alt=""/>
                            
                            <h4>{ele.title} </h4>
                        </Card>
                );
            })
        }

    </Grid>
  );
}

const Grid = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fit, minmax(20rem, 1fr));
    grid-grap : 3rem;
`;

const Card = styled.div`
    img{
        width : 100%;
        border-radius : 2rem;
    }
    a{
        text-decoration : none;
    }
    h4{
        text-align : center;
        padding : 1rem;
    }

`;
export default Searched