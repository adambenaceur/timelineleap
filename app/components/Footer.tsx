import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="ecommerce-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>timelineleap</h2>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} timelineleap. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer