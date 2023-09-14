import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { CrudContext } from '../Context/context';
import { api } from '../API/api';

const ModalProduct = ({ modal1Open, setModal1Open, isEdit }) => {

    const [form] = Form.useForm()
    const [usuarios, setUsuarios] = useState([])
    const [categorias, setCategorias] = useState([])
    const [brands, setBrands] = useState([])

    const { handleCreate, oneData, oneDataId, setOneData, handleEdit } = useContext(CrudContext);


    const handleGet = async (endPoint) => {
        const results = await api.get(`${endPoint}/`)
        if (endPoint === 'brands') {
            setBrands(results.data.data)
        } else if (endPoint === 'users') {
            setUsuarios(results.data.data)
        } else if (endPoint === 'categories') {
            setCategorias(results.data.data);
        }
    }


    const onFinish = (values) => {
        if (isEdit === "edit") {
            handleEdit(`products`, oneDataId, values);
        } else {
            handleCreate(`products`, values);
        };
        setModal1Open(false);
        form.resetFields();
    };

    useEffect(() => {
        form.setFieldsValue(oneData)
        setOneData("")
        handleGet("users")
        handleGet("brands")
        handleGet("categories")
    }, [oneData])



    return (
        <>

            <Modal
                forceRender
                title={`${isEdit === "edit" ? "Editar" : "Crear"} ${'products'}`}
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
                        name="brandId"
                        label="Brand"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Brand!',
                            },
                        ]}
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            placeholder="Brands"
                            showSearch
                            optionFilterProp='children'
                        >
                            {brands.map((item, index) => (
                                <Select.Option
                                    key={index}
                                    value={item.id}
                                >
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className='mt-5'
                        name="categoryId"
                        label="Category"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Category!',
                            },
                        ]}
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            showSearch
                            optionFilterProp='children'
                            placeholder="Categories"
                        >
                            {categorias.map((item, index) => (
                                <Select.Option
                                    key={index}
                                    value={item.id}
                                >
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className='mt-5'
                        name="userId"
                        label="Users"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Users!',
                            },
                        ]}
                    >
                        <Select
                            style={{
                                width: '100%',
                            }}
                            showSearch
                            optionFilterProp='children'
                            placeholder="Users"
                        >
                            {usuarios.map((item, index) => (
                                <Select.Option
                                    key={index}
                                    value={item.id}
                                >
                                    {item.email}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default ModalProduct;