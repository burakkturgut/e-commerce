import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slicees/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


function ProductDetails() {

    const { id } = useParams();
    const { product, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
    }, [])

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const getProductById = () => {
        product && product.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    return (
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '30px' }}>
                <img src={image} width={300} height={400} />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial' }}>{description}</p>
                <h1 style={{ fontFamily: 'arial', fontSize: '50px', color: 'red' }}>{price} ₺ </h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', marginRight: '5px ' }} /><span style={{ fontSize: '35px' }}>{count}</span><CiCircleMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '5px ' }} />
                </div>
                <div>
                    <button style={{ marginTop: '25px', border: 'none', padding: '10px', backgroundColor: 'lightblue', borderRadius: '5px', color: '#fff' }}>Sepete Ekle</button>
                </div>
            </div>

        </div>

    )
}

export default ProductDetails