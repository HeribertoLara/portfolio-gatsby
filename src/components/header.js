import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-black">
    <div className="grid-two">
      <div className="flex pt-1 md:pl-12">
        {/* <div className=' flex justify-center m-auto'> */}
          <p className='pt-1 border-double border-4 boder-red-600 text-red-600 w-16 h-16 rounded-full text-center text-5xl'>H</p><br/>
        {/* </div> */}
        <p className='text-3xl text-red-600 text-center doble-font my-4 ml-4'>{siteTitle}</p>
      </div>

      <div className="md:float-left">


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
      </div>
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
