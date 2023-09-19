import React from 'react';
import { Card, Col, Row } from 'antd';
import { Form, Input } from 'antd';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './register.style.css'
import shopRegister from '../../../img/tienda.avif'
import { api } from '../../API/api';

const Register = () => {

    const navigate = useNavigate('/')

    const createItem = async (data) => {
        try {
            await api.post(`users/create`, data);
        } catch (error) {
            console.error(error);

        };
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        createItem(values);
        navigate("/");
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <>
            <h1 className='text-center mt-3'>Registrate en Shop</h1>
            <Row className=' mt-5 d-flex justify-content-center'>
                <Col>
                    <Card className='d-flex '
                        cover={<img src={shopRegister}
                            alt='esta es una imagen de una tienda'
                            className='imagenShop' />}>
                        <Card
                            className='CardImage2'
                            hoverable
                            title="Registrate"
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
                                    <Input className='p-3 inputColor rounded-pill' />
                                </Form.Item>

                                <Form.Item
                                    className='mt-5 '
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password className='p-3 inputColor rounded-pill' />
                                </Form.Item>


                                <Link to={'/login'} className='text-dark text-decoration-none'>
                                    Iniciar sesion
                                </Link>

                                <Form.Item>
                                    <Button
                                        className='text-center w-100 mt-3 bg-danger p-3 
                                    rounded-pill border border-0 mt-5'
                                        type="submit">
                                        Registrate
                                    </Button>
                                </Form.Item>

                            </Form>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Register;