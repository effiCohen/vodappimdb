import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import NavBar from '../../../Layout/NavBar/NavBar';
import Stars from '../../Stars';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [loading,setLoading]=useState(false);
  let query = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getApiInfo();
  }, [query.id])

  const getApiInfo = async () => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?i=${query.id}&apikey=f35d9868`;
    const data = await axios.get(url);
    setMovie(data.data)
    setLoading(false)
  }

  return (
    <div className=' '>
      <NavBar/>
    <div className=' d-flex align-items-center justify-content-center    '>
      { loading? <img style={{height:'60px',width:'80px'}} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img> :
      <div  className='lern'>
        <div className='container'>
          <div className='row align-items-center justify-content-center  p-3  m-0 '>
           
        <img src={movie.Poster} className='rounded-5    'style={{'height':"390px",'width':"270px"}} />
       
        <div className='   text-muted col-md-5 p-4  '>
        <h2 className='text-light '>{movie.Title}</h2>
        <div className=''>{movie.Plot}</div>
        <div className=''>Genre: {movie.Genre}</div>
        <div className=''>Actors: {movie.Actors}</div>
        <div className=''>Year: {movie.Year}</div>
        <div className=''>Score: <Stars  rating= {movie.imdbRating}/></div>
        <div className=' mt-5' >
        <button className=' btn btn-outline-warning ' onClick={() => navigate(-1)}>Go back</button>
      </div>

      </div>
      </div>
      </div>

      </div>
      
      
      }
  
        
      
    </div>

    </div>
  //   <section id="learn" class="p-5">
  //   <div class="container">
  //     <div class="row align-items-center justify-content-between">
  //       <div class="col-md">
  //         <img src="/img/Rnew.jpg" class="img-fluid" alt="">
  //       </div>
  //       <div class="col-md p-5">
  //         <h2>Explore endless amount of catalogs </h2>
  //         <p class="lead">
  //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nemo ipsum omnis laborum officiis doloribus.
  //         </p>
  //         <p>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur adipisci explicabo tenetur
  //           pariatur numquam earum, officiis omnis dolor alias repellat sapiente fugit mollitia, voluptates,
  //           perspiciatis deserunt optio vel consectetur.
  //         </p>
  //         <a href="#" class="btn btn-light mt-3"> <i class="bi bi-chevron-right"></i> Read More</a>
  //       </div>
  //     </div>
  //   </div>
  // </section>

    
  )
}

export default MovieInfo