import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import "./Carrousel.css";
import { FcSearch } from "react-icons/fc";

const Carrousel = () => {

  const [Query, setQuerys] = useState("");
  const nav = useNavigate();


  return (
    <section className="home bg-dark">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-controls">
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="0"
                className="active lg-mt-5"
                aria-current="true"
                aria-label="Slide 1"
                style={{
                  backgroundImage:
                    "url('https://images.hdqwalls.com/download/wonder-woman-1984-10k-sy-1920x1200.jpg')",
                }}
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                style={{
                  backgroundImage:
                    "url('https://images.hdqwalls.com/download/henry-cavill-as-superman-zack-synders-justice-league-minimal-mk-1920x1200.jpg')",
                }}
              ></button>
              <button
                type="button"
                data-bs-target="#carousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                style={{
                  backgroundImage:
                    "url('https://images.hdqwalls.com/download/prey-movie-2022-ai-1920x1200.jpg')",
                }}
              ></button>

          </div>
          </div>
       
          <div className="carousel-inner">
            <div               style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/wonder-woman-1984-10k-sy-1920x1200.jpg')",
              }}
              className="carousel-item active">
              <div className="container ">
                <h2>The best Wonder</h2>
                <div className="form mx-auto mb-sm-8">
                <input value={Query} onInput={(e)=> setQuerys(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter')
    {Query.length&& nav(`/search/${Query}`)} }}
       type="search" placeholder='search...' className=' input' />
                    <FcSearch onClick={()=> nav(`/search/${Query}`)}  to={'/search/' + Query} />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            <div
              className="carousel-item "
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/henry-cavill-as-superman-zack-synders-justice-league-minimal-mk-1920x1200.jpg')",
              }}
            >
              <div className="container">
                <h2 className='font-weight-light '> Henry Supermen Cavill </h2>
                <div className="form mx-auto mb-sm-8">
                <input value={Query} onInput={(e)=> setQuerys(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter')
    {Query.length&& nav(`/search/${Query}`)} }}
       type="search" placeholder='search...' className=' input' />
                    <FcSearch onClick={()=> nav(`/search/${Query}`)}  to={'/search/' + Query} />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            <div
              className="carousel-item "
              style={{
                backgroundImage:
                  "url('https://images.hdqwalls.com/download/prey-movie-2022-ai-1920x1200.jpg')",
              }}
            >
              <div className="container">
                <h2> Prey Movie </h2>
                <div className="form mx-auto mb-sm-8">
                <input value={Query} onInput={(e)=> setQuerys(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter')
    {Query.length&& nav(`/search/${Query}`)} }}
       type="search" placeholder='search...' className=' input' />
                    <FcSearch onClick={()=> nav(`/search/${Query}`)}  to={'/search/' + Query} />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>
            
            


          </div>
          
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
  )
}

export default Carrousel