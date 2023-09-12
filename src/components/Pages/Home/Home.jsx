import React from 'react';
import { Card } from 'antd';
import './home.style.css'
const { Meta } = Card;


const Home = () => {

    return (
        <>
            <h1>Bienvenidos a Shop</h1>



            <div className='d-flex '>
                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,

                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/613TQTn1qRL._AC_UX679_.jpg" />}
                >
                    <Meta className='custom-meta' title="Ropa de verano" description="Ropa de verano" />
                </Card>

                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/61C7-A2R4HL._AC_UY500_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>

                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/81cjJ3lDrqL._AC_UY500_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>

                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/71uuaZDTDlL._AC_UY500_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>
            </div>

            <div className='d-flex mt-5'>
                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/61JnlpowweL._AC_UY500_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>

                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/51vdElfkZKL._AC_UX522_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>

                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/61i4wkyYJpL._AC_UX522_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>

                <Card
                    className='ms-5'
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/71rHHQAS7xL._AC_UX522_.jpg" />}
                >
                    <Meta title="Ropa de verano" description="Ropa de verano" />
                </Card>
            </div>
        </>
    );
};
export default Home;