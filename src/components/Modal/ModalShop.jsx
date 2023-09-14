import React, { useContext, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { CrudContext } from '../Context/context';
import { PlusOutlined } from '@ant-design/icons';

const ShopModal = ({ modal1Open, setModal1Open, isEdit }) => {
    const [form] = Form.useForm()

    const { handleCreate, oneData, oneDataId, setOneData, handleEdit } = useContext(CrudContext);

    const onFinish = (values) => {
        if (isEdit === "edit") {
            handleEdit("users", oneDataId, values);
        } else {
            handleCreate("users", values);
        };
        setModal1Open(false);
        form.resetFields();
    };
    useEffect(() => {
        form.setFieldsValue(oneData)
        setOneData("")
    }, [oneData])

    return (
        <>
            
            <Modal
                forceRender
                title={`${isEdit === "edit" ? "Editar" : "Crear"} ${'users'}`}
                style={{ top: 20 }}
                open={modal1Open}
                okText={`${isEdit === "edit" ? "Editar" : "Crear"}`}
                onOk={() => (setModal1Open(false), form.submit())}
                onCancel={() => { setModal1Open(false); form.resetFields(); }}
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
