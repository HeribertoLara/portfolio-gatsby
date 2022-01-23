import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-black">
    <div>
      <ul className='menu '>
        <li className='list'>
          <Link className='list-element' to="/"> Home </Link>
        </li>
        <li className='list'>
          <Link className='list-element' to="/about-me"> About me </Link>
        </li>
        <li className='list'>
            <Link className='list-element' to="/work"> Work </Link>
        </li>
        <li className='list'>
            <Link className='list-element' to="/contact"> Contact </Link>
        </li>
      </ul>
      {/* <h1> */}
        {/* <Link
          to="/"
        >
          {siteTitle} */}
        {/* </Link> */}
      {/* </h1> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
