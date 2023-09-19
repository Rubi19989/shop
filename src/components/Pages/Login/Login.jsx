import React, { useState } from 'react';
import { Card, Col, Row, message } from 'antd';
import { Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './login.style.css';
import shopita from '../../../img/shop.jpg'
import { api } from '../../API/api';
import { Button } from 'react-bootstrap';
import jwtDecode from "jwt-decode";


const Login = () => {

    const [postLogin, setPostLogin] = useState(null)
    const navigate = useNavigate('/');
    const [form] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();


    const onFinish = async (values) => {
        try {
            const usuario = { email: values.email, password: values.password };


            const postApi = await api.post(`login/auth`, usuario)
            setPostLogin(postApi.data)

            if (postApi.status === 200) {
                localStorage.setItem('user', postApi.data.data.token)
                const token = localStorage.getItem('user')

                const decoded = jwtDecode(token);
                localStorage.setItem('rols', JSON.stringify(decoded.roles))
                navigate("/")

            } else {
                console.error('Inicio de sesión fallido');
            }
            form.resetFields();

        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            form.resetFields();
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Ingrese su Correo electronico y contraseña correctamente',
        });
    };



    return (
        <>
            {contextHolder}

            <h1 className='text-center mt-3'>Shop Login</h1>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col>
                    <Card
                        className='d-flex cardShop'
                        cover={<img src={shopita} alt='esta es una imagen de una tienda'
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
                                form={form}
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
                                    <Input className='p-3  rounded-pill' />
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
                                    <Input.Password className='p-3  rounded-pill' />
                                </Form.Item>


                                <Link to={'/register'} className=' text-dark text-decoration-none'>
                                    Registrate
                                </Link>

                                <Button
                                    onClick={error}
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