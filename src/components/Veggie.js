import {React, useState , useEffect} from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';

const Veggie = () => {

    const [veggie, setVeggie] = useState([]);

    const getVeggie = async () => {
        let check = localStorage.getItem('veggie');
        if(check ){
            setVeggie( JSON.parse(check) );
            console.log('Veggie brought from LocalStroage');
        }else{
        
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=829403a1713b43dc86245a7c68f78c20`);
            const data = await response.json();
            localStorage.setItem('veggie' , JSON.stringify(data.results) );

            setVeggie(data);
            console.log(data);
        }
        
    }

    useEffect(() => {
        getVeggie();
    } , []);


    return (
    <div>
        <h3>Veggie</h3>
        <Wrapper>
            <Splide options={ { perPage : 3 , arrows : false , pagination : false, drag : true , gap : '5rem' } }>
            {
                veggie.map((ele) => {
                    return (
                        <SplideSlide key={ele.id}>
                            <Card > 
                                <p>{ele.title}</p>
                                <img src={ele.image} alt={ele.title} />
                            </Card>
                        </SplideSlide>
                    );
                })
                
            }
            </Splide>
        </Wrapper>
    </div>
  )
};


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


export default Veggie;