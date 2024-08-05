import React from 'react'

const Home = () => {
  return (
    <div>
      Home
      <Link to='/Temperature' className="btn">
        Temperature
      </Link>
      <Link to="/Currency" className="btn">
        Currency
      </Link>
    </div>
  );
}

export default Home
