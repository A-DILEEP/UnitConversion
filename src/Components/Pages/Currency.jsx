import React from 'react'
import { Link } from 'react-router-dom'
const Currency = () => {
  return (
    <div>
      Currency
      <Link to="/Temperature" className="btn">
        Temperature
      </Link>
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
}

export default Currency
