import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { navbarHeader, navbarMainDiv, whiteLink, navbarItemsDiv, navbarItem } from "../css/navbar.module.css"

const Header = ({ siteTitle }) => (
  <header className={navbarHeader}>
    <div className={navbarMainDiv}>
      <h1 style={{ margin: 0 }}>
        <Link className={whiteLink}
          to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className={navbarItemsDiv}>
        <ul>
          <Link className={'${whiteLink} ${navbarItem}'} to="/">About me</Link>
          <Link className={'${whiteLink} ${navbarItem}'} to="/">My work</Link>
          <Link className={'${whiteLink} ${navbarItem}'} to="/">Contact</Link>
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
