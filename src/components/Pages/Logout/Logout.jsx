import { Button, Card } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '../../../img/logout2.png'


const Logout = () => {
    const navigate = useNavigate()

    const salir = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('rols');
        navigate('/login')
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <Card
                    className='d-flex justify-content-center'
                    title="Cerrar secion"
                    bordered={false}
                    style={{
                        width: 500,
                    }}
                >
                    <img alt='imagen de un logout' src={`${logout}`} />

                    <Button onClick={() => salir()} className='bg-info mt-5'>
                        Desea Salir
                    </Button>
                </Card>
            </div>
        </>
    );
}

export default Logout;