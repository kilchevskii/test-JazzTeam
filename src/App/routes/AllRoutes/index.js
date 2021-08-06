import React from "react";
import { Route } from "react-router-dom";
import Profile from "..//..//Profile";
import Info from "..//..//Info";
import SignIn from "..//..//signIn";
import Main from "../../Main";
import DateEvent from "../../DateEvent";
const AllRoutes = ({ history }) => {
  return (
    <>
      <Route path="/" component={() => <Main history={history} />} key="1" />
      <Route
        path="/login"
        exact
        component={() => <SignIn history={history} />}
        key="2"
      />
      <Route
        path="/profile"
        exact
        component={() => <Profile history={history} />}
        key="3"
      />
      <Route
        path="/info"
        exact
        component={() => <Info history={history} />}
        key="4"
      />
      <Route
        path="/calendar"
        exact
        component={() => <DateEvent history={history} />}
        key="5"
      />
    </>
  );
};

export default AllRoutes;
