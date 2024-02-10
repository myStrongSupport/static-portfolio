import React from 'react'
import './productList.css'
import Product from '../Product/Product';
import { Img1, Img2, Img3, Img4, Img5, Img6 } from '../Product/img'

const data = [
    {
        id: 1,
        img: Img1,
        link: "http://lama.dev",
    },
    {
        id: 2,
        img: Img2,
        link: "http://lama.dev",
    },
    {
        id: 3,
        img: Img3,
        link: "http://lama.dev",
    },
    {
        id: 4,
        img: Img4,
        link: "http://lama.dev",
    },
    {
        id: 5,
        img: Img5,
        link: "http://lama.dev",
    },
    {
        id: 6,
        img: Img6,
        link: "http://lama.dev",
    },
]

const ProductList = () => {
    return (
        <section className='proL'>
            <div className="proL-texts">
                <h3>Create & inspire. It's Lama</h3>
                <p>Lama is creative portfolio that your work has been waiting for.Beautiful homes,stunning portfolio styles & a whole lot more awaits inside.</p>
            </div>
            <div className="proL-list">
                {data.map(item => <Product key={item.id
                } img={item.img} link={item.link} />)}

            </div>
        </section>
    )
}

export default ProductList