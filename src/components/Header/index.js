// Write your JS code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-image"
          />
          <ul className="nav-item">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="./cart">Cart</Link>
            </li>
            <button type="button" className="logout-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
                alt="nav logout"
                className="logout-icon"
              />
            </button>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
