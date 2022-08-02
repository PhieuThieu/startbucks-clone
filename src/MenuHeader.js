import React, {useState} from 'react';
import './MenuHeader.css'
import {Link} from "react-router-dom";

function MenuHeader(props) {
  const [index, setIndex] = useState(0);

  return (
    <div className='menuHeader'>
      <div className="menuHeader__links">
        <Link className={`${index === 0 && 'mmenuHeader__links--active'}`}
              onClick={() => setIndex(0)}
              to='/menu'
        >
          All products
        </Link>
        <Link className={`${index === 1 && 'mmenuHeader__links--active'}`}
              onClick={() => setIndex(1)}
              to='/menu/featured'
        >
          Featured
        </Link>
        <Link to='/menu'>Previous Orders</Link>
        <Link to='/menu'>Favorite Food</Link>
      </div>
    </div>
  );
}

export default MenuHeader;