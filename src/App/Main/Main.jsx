import React, { useEffect } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { getAuthorized, logout } from "..//..//App/helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin, logOut } from "..//redux/actions/actionAuth";

import "./styles.css";
import  logo  from './logo_jazzteam.png'
function Main({ history }) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadLogin());
  }, [dispatch]);
  const evenHandlerLogOut = () => {
    logout(history);
    dispatch(logOut());
  };

  return (
    <>
      <div className="wrapper__container">
        <div className="wrapper__header">
          <nav>
            <ul className="wrapper__header-links">
              {getAuthorized && auth === true ? (
                <li>
                  <Link onClick={evenHandlerLogOut}>Logout</Link>
                </li>
              ) : null}
              {getAuthorized && auth !== true ? (
                <li>
                  <Link  to="/login">Login</Link>
                </li>
              ) : null}
              <li>
                <Link to="/info">Info</Link>
              </li>
              {getAuthorized && auth === true ? (
                <li>
                  <Link to="/profile">{data ? `Profile ${data.data[0].firstName}` : null}</Link>
                </li>
              ) : null}
              <li>
                <Link to="/">Main</Link>
              </li>
            </ul>
          </nav>
        </div>
          <div className="wrapper__welcome-container">
                <img src={logo} alt="logo-image"></img>
                <p>Тестовое задание для JazzTeam</p>
          </div>
      </div>
    </>
  );
}

export default Main;
