import React, { useEffect } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "..//redux/actions/actionAuth";
import { getAuthorized } from "../helpers/helpers";
function Profile({ history }) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.auth.data);
  useEffect(() => {
    dispatch(loadLogin());
  }, [dispatch]);


  if (getAuthorized && auth !== true) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="wrapper__personal-data">
      <ul className className="wrapper__personal-data-block">
        <img src={data ? data[0].avatar : "Фото пользователя"} alt="user-avatar"></img>
        <li>{data ? data[0].firstName : "Имя пользователя"}</li>
        <li>{data ? data[0].lastName : "Фамилия пользователя"}</li>
        <li>{data ? data[0].technologies : "Стек"}</li>
      </ul>
    </div>
  );
}

export default Profile;
