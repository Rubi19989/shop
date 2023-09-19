import React, { createContext, useState } from 'react';
import { api } from '../API/api';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {

    const [shop, setShop] = useState(null);

    const [oneData, setOneData] = useState("");
    const [oneDataId, setOneDataId] = useState("");



    const getOneElement = async (endPoint, id) => {
        try {
            const getInstance = await api.get(`${endPoint}/${id}/single`);
            setOneData(getInstance.data.data);
            setOneDataId(getInstance.data.data.id);
        } catch (error) {
            console.error(error);
        };
    };

    const getItems = async (locura) => {
        try {
            const getApi = await api.get(`${locura}/`);
            setShop(getApi.data.data);
        } catch (error) {
            console.log('Hubo un error')
        }

    }

    const handleDelete = async (endpoint, id) => {
        try {
            const deleteCrud = await api.delete(`${endpoint}/${id}/delete/`);
            await getItems(endpoint);
          
        } catch (error) {
            console.log('No se puede eliminar')
        }

    }

    const handleEdit = async (putEdit, id, data) => {
        const editCrud = await api.put(`${putEdit}/${id}/update/`, data)
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
        getOneElement,
        oneData,
        setOneData,
        oneDataId,
        handleCreate,
    }

    return (
        <CrudContext.Provider
            value={values}>
            {children}
        </CrudContext.Provider>
    );


}

export { CrudContext, CrudProvider }