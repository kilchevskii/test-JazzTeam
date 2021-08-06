import React from "react";
import { Route } from "react-router-dom";
import Profile from "..//..//Profile";
import Info from "..//..//Info";
import SignIn from "..//..//signIn";
import Main from "../../Main";
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
      {/* <Route exact path="/profile" key="3">
        {getAuthorized() === true ? (
          <Redirect
            to={"/profile"}
            component={() => <Profile history={history} />}
          />
        ) : (
          <Redirect
            to={"/login"}
            component={() => <SignIn history={history} />}
          />
        )}
      </Route> */}
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
    </>
  );
};

export default AllRoutes;

// <Route
//       path='/login'
//       component={() => <SignIn history={history} />}
//       key='1'
//    />
//    <Route exact path='/'>
//       {isAuthenticated && getUserRole() === 'admin' ? (
//          <Redirect to={'/admin'} />
//       ) : isAuthenticated && getUserRole() === 'user' ? (
//          <Redirect to={'/user'} />
//       ) : (
//          <Redirect to={'/login'} />
//       )}
//    </Route>
