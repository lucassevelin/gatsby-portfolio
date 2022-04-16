import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { navbarHeader, navbarMainDiv, whiteLink, navbarItemsDiv, navbarItem, navbarItemsUl } from "../css/navbar.module.css"

const Header = ({ siteTitle }) => (
  <header className={navbarHeader}>
    <div className={navbarMainDiv}>
      <h1>
        <Link className={whiteLink}
          to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className={navbarItemsDiv}>
        <ul classNme={navbarItemsUl}>
          <Link className={navbarItem} to="/">About me</Link>
          <Link className={navbarItem} to="/">My work</Link>
          <Link className={navbarItem} to="/">Contact</Link>
        </ul>
      </div>
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
