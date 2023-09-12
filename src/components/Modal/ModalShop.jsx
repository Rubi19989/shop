import React, { useContext } from 'react';
import { Button, Modal, Form, Input, } from 'antd';
import { CrudContext } from '../Context/context';
import { PlusOutlined } from '@ant-design/icons';

const ShopModal = () => {
    const [form] = Form.useForm()

    const { handleCreate, modal1Open, setModal1Open } = useContext(CrudContext);

    const onFinish = (values) => {
        console.log(values);
        handleCreate("users", values);
        form.resetFields();
    }

    return (
        <>
                <Button
                    className="createUser"
                    htmlType="button"
                    onClick={() => setModal1Open(true)}
                >
                    <PlusOutlined />
                </Button>
            <Modal
                title="Crear"
                style={{ top: 20 }}
                open={modal1Open}
                onOk={() => (setModal1Open(false), form.submit())}
                onCancel={() => setModal1Open(false)}
            >
                <Form
                    form={form}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
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
                        <Input />
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
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>

        </>
    );
};
export default ShopModal;