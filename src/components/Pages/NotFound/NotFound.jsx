import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Card
                title="Not Found"
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                <h1 className='text-center mt-5'>
                    404
                </h1>

                <Link to={'/login'} className='btn btn-info'>Regresar</Link>
            </Card>
        </div>
    );
}

export default NotFound;