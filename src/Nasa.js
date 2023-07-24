import React, { useEffect, useState } from 'react'

import axios from 'axios'

function Nasa() {

    const [Data, setData] = useState([])

    useEffect(() => {

        const fetchAPOD = async () => {

            try {

                const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=ngxNaXPoYbDTQlmIfBoM9sHSIMI7xxfTVWQpNMPC')
                const data = response.data;

                setData(data);

            } catch (error) {

                console.log(error.message)

            }

        }

        fetchAPOD();

    }, []);

    return (

        <div className='data'>

            <h1>{Data.title}</h1><br></br>

            <h2>Date: {Data.date}</h2><br></br>

            <img title={Data.title} src={Data.url}></img><br></br>

            <h2>Explanation</h2>

            <p>{Data.explanation}</p><br></br>



        </div>

    )

}




export default Nasa;