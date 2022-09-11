import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular =  () => {

    const [popular, setPopular] = useState([]);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
            console.log('brought from LocalStroage');
        }else{
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=829403a1713b43dc86245a7c68f78c20&number=9`);
            const data = await response.json();
            
            localStorage.setItem('popular' , JSON.stringify(data.recipes));
            console.log(data );
            setPopular(data.recipes );
        }
    }

    useEffect(() => {
        getPopular();
    }, [])


  return (
    <div>
        <h3>Popular Picks</h3>             
            <Wrapper > 
                <Splide options = {{ perPage : 4 , arrows : false , pagination : false, drag : true , gap : '5rem' }}>
                    {popular.map((ele) => {
                        return (
                            
                            <SplideSlide  key={ele.id}>
                                <Card>
                                    <p>{ele.title}  </p>
                                    <img src={ele.image} alt='{recipe.title}' />
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                           
                        );
                        })
                    }
                </Splide>
            </Wrapper>

    </div>
  )
}

const Wrapper = styled.div `
    margin : 4rem 0rem; 
`;

const Card = styled.div `
    min-height : 25rem; 
    border-radius : 2rem;
    overflow : hidden;
    position : relative;
    
    img{
        border-radius : 2rem;
        position : absolute;
        left :0;
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    p{
        position : absolute;
        color : white;
        z-index : 10;
        bottom : 7%;
        text-align : center;
        width : 100%;
        font-wieght : 600;
        font-szie : 40%;
    }
`;

const Gradient = styled.div `
    position : absolute;
    width : 100%;
    height : 100%;
    background : linear-gradient( rgba(0,0,0,0)  , rgba(0,0,0, 0.5) );
`;



//const Img = styled

export default Popular;