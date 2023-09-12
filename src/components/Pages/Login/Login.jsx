import React from 'react';
import { Card, Col, Row } from 'antd';
import { Form, Input } from 'antd';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.style.css';
import shop from '../../../img/shop.jpg'

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <h1 className='text-center mt-3'>Shop Login</h1>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col>
                    <Card
                        className='d-flex cardShop'
                        cover={<img src={shop} alt='esta es una imagen de una tienda'
                            className='imagenShop' />}
                    >
                        <Card
                            className='CardImage'
                            hoverable
                            title="Login"
                            bordered={false}
                            style={{
                                width: 500,
                            }}
                        >


                            <Form
                                name="basic"
                                layout='vertical'
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    className='mt-5'
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {
                                            required: true,
                                            type: 'email',
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input className='p-3 inputColorLogin rounded-pill' />
                                </Form.Item>

                                <Form.Item
                                    className='mt-5'
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password className='p-3 inputColorLogin rounded-pill' />
                                </Form.Item>


                                <Link to={'/register'} className='text-dark'>
                                    Registrate
                                </Link>

                                <Button
                                    className='text-center w-100 mt-3 bg-danger p-3 mt-5
                                 rounded-pill border border-0'
                                    type="submit">
                                    Login
                                </Button>

                            </Form>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Login;