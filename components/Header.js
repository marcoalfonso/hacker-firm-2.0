import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
  <header id="header" className="alt">
    { props.router.pathname !== '/' &&
      <Link href="/">
        <div className="logo">
          <img src="static/images/logo.svg" width="54px" height="54px" alt="Hacker Firm" />
          <span>Hacker Firm</span>
        </div>
      </Link>
    }
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func
}

export default Header
