'use client';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const Manageproduct = () => {

    const [productList, setProductList] = useState([])

    const fetchProductList = () => {
        axios.get('http://localhost:5000/product/getall')
            .then((res) => {
                console.log(res.status)
                console.log(res.data)
                setProductList(res.data)
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to fetch user list')
            });
    }
    useEffect(() => {
        fetchProductList()         //backend se data fetch karta hai 
    }, [])



    const displayCards = () => {
        return productList.map((product) => (
            <div className='w-full md:w-1/3'>
                    <div className='flex justify-between items-center mb-6  px-10'>
                        <div class="w-[70%] bg-white p-6 shadow-xl rounded-lg">
                            <h4 className='text-center text-xl font-bold text-blue-400 mb-2'>Items</h4>
                            <h4 class="text-xl font-semibold mb-2 ">Name: {product.name}</h4>
                            <h4 class="text-xl font-semibold mb-2">Brand: {product.brand}</h4>
                            <h4 class="text-xl font-semibold mb-2">MRP: {product.MRP}</h4>
                            <h4 class="text-xl font-semibold mb-2">Description: {product.description}</h4>
                        </div>
                    </div>
            </div>

        ))
    }


    return (
        <div className='p-10'>
            <h1 className='text-center text-3xl front-bold mb-8 mx-2'>Products</h1>
            <div className='flex flex-wrap mx-auto'>
                {displayCards()}

            </div>
        </div>
    )
}

export default Manageproduct