import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slicees/productSlice';


function ProductList() {

    const dispatch = useDispatch();
    const { product } = useSelector((store) => store.product);
    console.log(product);
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    return (
        <div>ProductList</div>
    )
}

export default ProductList