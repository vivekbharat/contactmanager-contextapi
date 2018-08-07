import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { name } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {name}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  name: "My App"
};

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
