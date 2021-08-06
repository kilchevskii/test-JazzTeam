import React, { useEffect } from "react";
import { Calendar, Badge } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "..//redux/actions/actionAuth";
import { getAuthorized } from "../helpers/helpers";

// { type: 'error', content: 'This is error event 4.' },

import "./styles.css";
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [];
    case 2:
      listData = [];
    case 3:
      listData = [];
    case 4:
      listData = [];
    case 5:
      listData = [];
    case 6:
      listData = [];
    case 7:
      listData = [];
    case 8:
      listData = [];
    case 9:
      listData = [];
    case 10:
      listData = [];
    case 11:
      listData = [];
    case 12:
      listData = [];
    case 13:
      listData = [];
      break;
    case 14:
      listData = [];
      break;
    case 15:
      listData = [];
      break;
    case 16:
      listData = [];
      break;
    case 17:
      listData = [];
      break;
    case 18:
      listData = [];
      break;
    case 19:
      listData = [];
      break;
    case 20:
      listData = [];
      break;
    case 21:
      listData = [];
      break;
    case 22:
      listData = [];
      break;
    case 23:
      listData = [];
      break;
    case 24:
      listData = [];
      break;
    case 25:
      listData = [];
      break;
    case 26:
      listData = [];
      break;
    case 27:
      listData = [];
      break;
    case 28:
      listData = [];
      break;
    case 29:
      listData = [];
      break;
    case 30:
      listData = [];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content} onClick={console.log(item)}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

function DateEvent({ history }) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.auth.data);
  useEffect(() => {
    dispatch(loadLogin());
  }, [dispatch]);

  if (getAuthorized && auth !== true) {
    return <Redirect to="/main" />;
  }

  return (
    <div className="wrapper__calendar">
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}

export default DateEvent;
