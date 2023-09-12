import { Button, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect } from 'react';
import { CrudContext } from '../../Context/context';
import BrandsAndCategoy from '../../Modal/BrandsAndCategoy.modal';
import './category.style.css'

const Categories = () => {

    const { handleDelete, getItems, shop } = useContext(CrudContext);


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
                            onConfirm={() => handleDelete("categories", record.id)}

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
        getItems('categories')
    }, [])

    return (
        <>
            <BrandsAndCategoy endPoint={'categories'} />
            <Table
                columns={columns}
                dataSource={shop}
                rowKey={"id"}
                bordered
                scroll={{ x: 500 }}
            />
        </>
    );
}

export default Categories;