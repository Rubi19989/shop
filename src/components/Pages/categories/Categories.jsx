import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { CrudContext } from '../../Context/context';
import BrandsAndCategoy from '../../Modal/BrandsAndCategoy.modal';
import './category.style.css'

const Categories = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const [isEdit, setIsEdit] = useState("");
    const { handleDelete, getItems, shop, getOneElement } = useContext(CrudContext);


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
                        <Button className="styleEdit"
                            onClick={async () => { await getOneElement("categories", record.id); setIsEdit("edit"); setModal1Open(true) }}
                        >
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
            <Button
                className="createUser"
                htmlType="button"
                onClick={() => { setModal1Open(true); setIsEdit("") }}
            >
                <PlusOutlined />
            </Button>

            <BrandsAndCategoy
                endPoint={'categories'}
                modal1Open={modal1Open}
                setModal1Open={setModal1Open}
                isEdit={isEdit}
            />
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