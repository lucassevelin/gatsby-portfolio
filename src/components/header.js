import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import navbar from "/css/navbar.css"

const Header = ({ siteTitle }) => (
  <header className={navbar.navbarHeader}>
    <div className={navbar.navbarMainDiv}>
      <h1 style={{ margin: 0 }}>
        <Link className={navbar.whiteLink}
          to="/">
          {siteTitle}
        </Link>
      </h1>
      <div>
        <ul>
          <Link className={navbar.whiteLink} to="/">About me</Link>
          <Link className={navbar.whiteLink} to="/">My work</Link>
          <Link className={navbar.whiteLink} to="/">Contact</Link>
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
