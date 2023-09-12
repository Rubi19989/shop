import { Button, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect } from 'react';
import './brand.style.css'
import { CrudContext } from '../../Context/context';
import BrandsAndCategoy from '../../Modal/BrandsAndCategoy.modal';

const Brands = () => {


    const { shop, getItems, handleDelete } = useContext(CrudContext)

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
        },
        {
            title: 'UpdatedAt',
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
                            onConfirm={() => handleDelete('brands', record.id)}
                        >
                            <Button className="styleDelete">Eliminar</Button>
                        </Popconfirm>
                        <Button className="styleEdit">
                            Editar
                        </Button>
                    </div>
                )
            }
        },
    ];

    useEffect(() => {
        getItems('brands')
    }, [])


    return (
        <>

            <BrandsAndCategoy endPoint={"brands"} />
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

export default Brands;