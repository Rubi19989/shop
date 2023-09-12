import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Input, } from 'antd';
import { CrudContext } from '../Context/context';
import { PlusOutlined } from '@ant-design/icons';

const BrandsAndCategoy = ({ endPoint }) => {

    const [form] = Form.useForm()

    const [modal1Open, setModal1Open] = useState(false);
    const { handleCreate } = useContext(CrudContext);

    const onFinish = (values) => {
        console.log(values);
        handleCreate(`${endPoint}`, values);
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
                                message: 'Please input your email!',
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

export default BrandsAndCategoy;