import React, { useState} from "react";
import './styles.css'
import { Form, Input, Button, Layout, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "..//redux/actions/actionAuth";
const { Footer, Content } = Layout;
const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const [error, setError] = useState('')
  const onFinish = (values) => {
    dispatch(loadLogin({ data: values, history }));
    if (auth === false) {
      setError('Incorrect password or email')
    }
  };

  return (
    <Content>
      <Row justify="center">
        <Col>
          <Card
            title={<h2>Login</h2>}
          >
            <Row justify="center">
              <Col>
                <Form name="normal_login" onFinish={onFinish}>
                  <Form.Item
                    name="login"
                    rules={[
                      {
                        required: true,
                        message: "Field is required",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Логин"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Field is required",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Пароль"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Submit
                    </Button>
                    <p className='validate'>{error ? error : null}</p>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default SignIn;
