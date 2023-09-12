import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Input, } from 'antd';
import { CrudContext } from '../Context/context';
import { PlusOutlined } from '@ant-design/icons';

const ModalProduct = () => {

    const [form] = Form.useForm()

    const { handleCreate, modal1Open, setModal1Open } = useContext(CrudContext);

    const onFinish = (values) => {
        console.log(values);
        handleCreate(`${'products'}`, values);
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
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                type: 'name',
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className='mt-5'
                        name="price"
                        label="Price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Price!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className='mt-5'
                        name="brand"
                        label="Brand"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Brand!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className='mt-5'
                        name="category"
                        label="Category"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Category!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className='mt-5'
                        name="user"
                        label="User"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your User!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default ModalProduct;