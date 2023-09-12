import React, { createContext, useState } from 'react';
import { api } from '../API/api';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {

    const [shop, setShop] = useState(null);
    const [modal1Open, setModal1Open] = useState(false);



    const getItems = async (locura) => {
        const getApi = await api.get(`${locura}/`);
        setShop(getApi.data.data);
    }

    const handleDelete = async (endpoint, id) => {
        const deleteCrud = await api.delete(`${endpoint}/${id}/delete/`);
        await getItems(endpoint);
        console.log(deleteCrud)
    }

    const handleEdit = async (putEdit, id, data) => {
        const editCrud = await api.put(`${putEdit}/${id}/edit/`, data)
        await getItems(putEdit);
        console.log(editCrud)
    }

    const handleCreate = async (postCreate, data) => {
        const createShop = await api.post(`${postCreate}/create/`, data);
        await getItems(postCreate);
        console.log(createShop);
    }





    const values = {
        getItems,
        shop,
        handleDelete,
        handleEdit,
        setShop,
        handleCreate,
        modal1Open,
        setModal1Open
    }

    return (
        <CrudContext.Provider
            value={values}>
            {children}
        </CrudContext.Provider>
    );


}

export { CrudContext, CrudProvider }