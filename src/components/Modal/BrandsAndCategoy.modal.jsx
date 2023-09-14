import React, { useContext, useEffect } from 'react';
import { Modal, Form, Input, } from 'antd';
import { CrudContext } from '../Context/context';

const BrandsAndCategoy = ({ endPoint, modal1Open, setModal1Open, isEdit }) => {

    const [form] = Form.useForm()


    const { handleCreate, oneData, oneDataId, setOneData, handleEdit } = useContext(CrudContext);

    const onFinish = (values) => {
        if (isEdit === "edit") {
            handleEdit(`${endPoint}`, oneDataId, values);
        } else {
            handleCreate(`${endPoint}`, values);
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
                title={`${isEdit === "edit" ? "Editar" : "Crear"} ${endPoint}`}
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
                    initialValues={oneData === "" ? "" : oneData}
                    onValuesChange={(_, allValues) => {
                        if (oneData !== "") {
                            setOneData(allValues);
                        }
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
                        <Input
                            placeholder='Input name'
                            className="p-2"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default BrandsAndCategoy;