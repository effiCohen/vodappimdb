import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const [Year, setarYears] = useState([1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,2022]);

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark mt-2 ">
       <Link className="navbar-brand text-white p-2 " to={'/'}>Home</Link>
        <button className="navbar-toggler bg-white rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon  bg-white rounded-3"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item">
           {Year.map(item => {
               return (
                   <Link key={item} to={`/year/${item}`} className=' text-white col-auto btn '>{item}</Link>
                   )
               })}
        </li>
      </ul>
    </div>
</nav>


</>
  )
}

export default Header