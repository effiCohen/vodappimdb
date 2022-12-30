import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import Header from '../../Layout/Header/Header'
import Carrousel from '../Carrousel/Carrousel'
import Movie from '../Pages/movie/Movie'

const Home = () => {
  const [movies,setMovies]=useState([])
  const [loading, setLoading] = useState(false);
  const {serchQuerys,Year}=useParams() 

useEffect(()=>{
  getApi()
},[serchQuerys,Year]);

const getApi=async()=>{
  setLoading(true);
  let url=`https://www.omdbapi.com/?s=${serchQuerys||"bank"}&y=${Year}&apikey=f35d9868`
  const{data}=await axios.get(url);
  const temp =data.Search
  if(temp){
  const filterd=temp.filter(temp =>temp.Poster!="N/A")
  setMovies(filterd)
}
else{
  setMovies([])
}
  setLoading(false);

  
}




  return (
    <div className='bg-dark' >
     <Carrousel/>
     <Header />
     {loading&&<img className='rounded-top' style={{height:'60px',width:'80px'}} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img>}
     <div className="d-flex justify-content-center mt-3">
     {!movies.length && !loading && <h2  className='text-white'>No results...</h2>}
     </div>
          <div className=" ">
       <Movie movies={movies} />) 

    </div>
    </div>
  )
}

export default Home



