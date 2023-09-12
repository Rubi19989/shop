import { Button, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect } from 'react';
import { CrudContext } from '../../Context/context';
import ShopModal from '../../Modal/ModalShop';

const Users = () => {

    const { handleDelete, getItems, shop, setModal1Open } = useContext(CrudContext)


    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'email',
            dataIndex: 'email',
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
            dataIndex: "id",
            render: (_, record) => {
                return (
                    <div className='d-flex justify-content-center'>
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete("users", record.id)}
                        >
                            <Button className="styleDelete">Eliminar</Button>
                        </Popconfirm>
                        <Button className="styleEdit" onClick={() => setModal1Open(true)}>
                            Editar
                        </Button>
                    </div>
                )
            }

        },
    ];

    useEffect(() => {
        getItems("users");
    }, [])

    return (
        <>

            <ShopModal />
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

export default Users;