// import './App.css';
import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { Layout } from "antd";
import AllRoutes from "./routes/AllRoutes";
import { Route, Redirect, Link } from "react-router-dom";

const { Content } = Layout;


const App = ({ history }) => {

  return (
    <Switch>
      <Content>
        <AllRoutes history={history} />
      </Content>
    </Switch>
  );
};

export default withRouter(App);
