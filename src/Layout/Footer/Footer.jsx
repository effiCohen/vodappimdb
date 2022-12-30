import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-center text-lg-italic bg-warning">
 
  <div className="text-center p-3 text-white font-italic" >
    ©️ 2022 Copyright: 
    <Link className="text-white" to="/"> Effi Cohen</Link>
  </div>
</footer>

  )
}

export default Footer