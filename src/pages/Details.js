import {React ,useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [data, setData] = useState([]);
    const title = useParams().title;

    const fetchData = async () => {
        const response = await fetch(` ${title}`);
        const data = await response.json();
        setData(data);
        console.log(data);
    }

    useEffect(()=> {
        fetchData();

    } , [title]);    

    return (
        <div>
            <p>{data.title}</p>
            <img src='' alt='' />
            
        </div>
  )
}

export default Details;