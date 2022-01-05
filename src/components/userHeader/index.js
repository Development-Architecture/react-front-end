import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import logoPng from '../../assets/logo.png'

function UserHeader() {
  const [vAuthCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("auth_token") != undefined ||
      localStorage.getItem("auth_token") != null
    ) {
      setAuthCheck(true);
    }
  }, [vAuthCheck]);

  const logout = () => {
    localStorage.removeItem("auth_token")
    setAuthCheck(false)
  }

  return (
    <div className="header-wrapper">
      <ul className="nav justify-content-between align-items-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            {/* <span className="nav-title">MokeStockPhoto</span> */}
            <img className="filter-logo" src={logoPng} />
          </a>
        </li>
        <ul className="nav">
          {vAuthCheck ? (
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={logout}>
                Sign Out
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/user/login" className="nav-link" href="#">
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default UserHeader;
