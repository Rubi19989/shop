import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect } from 'react';
import { CrudContext } from '../../Context/context';
import ModalProduct from '../../Modal/Modal.products';

const Products = () => {

    const { handleDelete, getItems, shop, setModal1Open } = useContext(CrudContext);


    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            render: (text) => <span>{text}</span>,
        },

        {
            title: 'Price',
            dataIndex: 'price',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Brand',
            dataIndex: 'Brand',
            render: (brand) => { return brand?.name },
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            render: (categorie) => { return categorie?.name },
        },
        {
            title: 'User',
            dataIndex: 'User',
            render: (user) => { return user?.email },
        },

        {
            title: 'Created_At',
            dataIndex: 'createdAt',
        },
        {
            title: 'Updated_At',
            dataIndex: 'updatedAt',
        },
        {
            title: 'Accions',
            width: 200,
            dataIndex: "Accions",
            render: (_, record) => {
                return (
                    <div className='d-flex justify-content-center'>
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete("products", record.id)}
                        >
                            <Button className="styleDelete">Eliminar</Button>
                        </Popconfirm>
                        <Button className="styleEdit" onClick={() => setModal1Open(true)}>
                            Editar
                        </Button>
                    </div>
                )
            },
        },
    ];

    useEffect(() => {
        getItems("products");
    }, [])


    return (
        <>
            <ModalProduct />



            <Table
                columns={columns}
                dataSource={shop}
                bordered
                rowKey={"id"}
                scroll={{ x: 500 }}
            />
        </>
    );
}

export default Products;