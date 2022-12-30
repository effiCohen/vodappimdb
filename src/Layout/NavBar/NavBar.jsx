import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { FcSearch } from "react-icons/fc";

const NavBar = () => {
  const [Query, setQuerys] = useState("");
  
  const nav=useNavigate()

  return (
<nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
          <Link  className="navbar-brand text-warning fs-3" to={'/'}>Home</Link>
                    <div className="col-lg-4 d-flex justify-content-end ">
                      <div className=" d-flex justify-content-between">
                        <input value={Query} onInput={(e)=> setQuerys(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter')
                 {Query.length&& nav(`/search/${Query}`)} }}
                  type="search" placeholder='search...' className='text-white form-control bg-dark'style={{width:'90%'}} />
                        <FcSearch className='btn' style={{width:'20%',height:'39px'}}onClick={()=>Query.length&& nav(`/search/${Query}`)}  to={'/search/' + Query} />
                        </div>
                    </div>
                </div>
            </nav>

  )
}

export default NavBar