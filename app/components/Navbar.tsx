"use client"

import { BsBag, BsSearch } from 'react-icons/bs';
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className='container-items' style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className="container-logo" style={{ fontSize: '1.5rem', fontWeight: '300' }}>
              timelineleap
            </h1>

            <nav style={{ marginRight: '10px' }}>
              <ul className="nav-items" style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                <li className="nav-item" style={{ marginRight: '10px', marginLeft: '10px' }}>
                  <a href="/" style={pathname === '/' ? { textDecoration: 'underline' } : {}}>
                    <span>
                      Home
                    </span>
                  </a>
                </li>
                <li className="nav-item" style={{ marginRight: '10px' }}>
                  <a href="/collections/all" style={pathname === '/collections/all' ? { textDecoration: 'underline' } : {}}>
                    <span>
                      Catalog
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/pages/contact" style={pathname === '/pages/contact' ? { textDecoration: 'underline' } : {}}>
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
