"use client"

import { BsBag, BsSearch } from 'react-icons/bs';
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="container">
          <div className='container-items'>
            <h1 className="container-logo">timelineleap</h1>

            <nav>
              <ul className="nav-items">
                <li className="nav-item">
                  <a href="/" className={pathname === '/' ? "active" : ""}>
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/collections/all" className={pathname === '/collections/all' ? "active" : ""}>
                    <span>Catalog</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/pages/contact" className={pathname === '/pages/contact' ? "active" : ""}>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="react-icons">
            <BsSearch size={18} />
            <BsBag size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
