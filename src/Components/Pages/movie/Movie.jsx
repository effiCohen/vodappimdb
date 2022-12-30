import React from 'react'
import { Link } from 'react-router-dom'
import "./movie.css"

const Movie = ({movies}) => {
  return (
    <div className='container '>
    <div className="row">
        {movies.map(item => {
       
            console.log(item)
            return (
                <div key={item.imdbID} className='col-md-3 col-6 mb-5 m-0 '>
                    <Link className=' ' to={"/video/" + item.imdbID}>
                        <div style={{  cursor: "pointer" }} className="card">
                            <img src={item.Poster}  className=" rounded-4" />
                        </div>
                    </Link>
                </div>                         
            )
            }
        )}
        </div>  
        </div>  
  )
}

export default Movie