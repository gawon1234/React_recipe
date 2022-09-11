import {React, useState , useEffect} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
const Cuisine = () => {

    const [cuisine, setCuisine]  = useState([]);
    let params = useParams();

    const getCuisine = async (type) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=829403a1713b43dc86245a7c68f78c20&cuision=${type}`);
        const data = await response.json();
        setCuisine(data.results);
    };

    useEffect(() => {
        getCuisine( params.type);
        console.log(`params.type = ${params.type}` ) ;
    } , [params.type] );

    return (
        <div>
            <Grid>    
            {
                cuisine.map((ele) => {
                    return (
                        <Card key={ele.id} > 
                            <img src={ele.image}  alt=""/>
                            
                            <h4>{ele.title} </h4>
                        </Card>
                    );
                })
            }

            </Grid>
        </div>
    )
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

export default Cuisine;