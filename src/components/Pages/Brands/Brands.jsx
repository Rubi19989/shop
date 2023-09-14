import { Button, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import './brand.style.css'
import { CrudContext } from '../../Context/context';
import BrandsAndCategoy from '../../Modal/BrandsAndCategoy.modal';
import { PlusOutlined } from '@ant-design/icons';

const Brands = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const [isEdit, setIsEdit] = useState("");
    const { shop, getItems, handleDelete, getOneElement } = useContext(CrudContext)



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
                        <Button className="styleEdit"
                            onClick={async () => { await getOneElement("brands", record.id); setIsEdit("edit"); setModal1Open(true) }}>
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
            <Button
                className="createUser"
                htmlType="button"
                onClick={() => { setModal1Open(true); setIsEdit("") }}
            >
                <PlusOutlined />
            </Button>
            <BrandsAndCategoy
                endPoint={"brands"}
                modal1Open={modal1Open}
                setModal1Open={setModal1Open}
                isEdit={isEdit}
            />
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