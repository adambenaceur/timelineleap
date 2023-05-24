"use client"


import { BsBag, BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className='container-items' style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className="container-logo" style={{ fontSize: '1.5rem' }}>
              timelineleap
            </h1>

            <nav style={{ marginRight: '10px' }}>
              <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                <li style={{ marginRight: '10px', marginLeft: '10px' }}>
                  <a href="/">
                    <span>
                      Home
                    </span>
                  </a>
                </li>
                <li style={{ marginRight: '10px' }}>
                  <a href="/collections/all">
                    <span>
                      Catalog
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/pages/contact">
                    <span>
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="react-icons" style={{ display: 'flex', alignItems: 'center' }}>
            <BsSearch size={18} style={{ marginRight: '10px', marginLeft: '10px' }} />
            <BsBag size={18} style={{ marginRight: '10px', marginLeft: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

