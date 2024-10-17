'use client';
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';



const Addproduct = () => {

    const productForm = useFormik({
        initialValues: {
            name: '',
            brand: '',
            MRP: '',
            description: '',
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            axios.post('http://localhost:5000/product/add', values)
                .then((Response) => {
                    console.log(Response.status)
                    resetForm()
                    toast.success('Product Added Successfully')
                }).catch((err) => {
                    console.log(err)
                    toast.error('Failed to add Product')
                });
        },
    })




    return (
        <div>
            <section className='h-96 text-center my-6 box-content mx-96 border-4 '>
                <div className='font-bold text-3xl mt-3'>
                    <h1>Add Your Product</h1>
                </div>
                <form onSubmit={productForm.handleSubmit}>
                    <div className='mt-10'>
                        <label htmlFor="">
                            <span className='mr-4 text-xl'>Name</span>
                        </label>
                        {productForm.errors.name && productForm.touched.name ? (
                            <div className='text-red-500 text-sm'>{productForm.errors.name}</div>
                        ) : null}
                        <input type="text"
                            id='name'
                            onChange={productForm.handleChange}
                            value={productForm.values.name}
                            placeholder='Product Name' 
                            className='p-2 text-md rounded-lg border'
                        />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">
                            <span className='mr-4 text-xl'>Brand</span>
                        </label>
                        {productForm.errors.brand && productForm.touched.brand ? (
                            <div className='text-red-500 text-sm'>{productForm.errors.brand}</div>
                        ) : null}
                        <input type="text"
                            id='brand'
                            onChange={productForm.handleChange}
                            value={productForm.values.brand}
                            placeholder='Brand' 
                            className='p-2 text-md rounded-lg border'
                        />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">
                            <span className='mr-4 text-xl'>MRP</span>
                        </label>
                        {productForm.errors.MRP && productForm.touched.MRP ? (
                            <div className='text-red-500 text-sm'>{productForm.errors.MRP}</div>
                        ) : null}
                        <input type="text"
                            id='MRP'
                            onChange={productForm.handleChange}
                            value={productForm.values.MRP}
                            placeholder='Price' className='p-2 text-md rounded-lg border'
                        />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="">
                            <span className='mr-4 text-xl'>description</span>
                        </label>
                        {productForm.errors.description && productForm.touched.description ? (
                            <div className='text-red-500 text-sm'>{productForm.errors.description}</div>
                        ) : null}
                        <input type="text"
                            id='description'
                            onChange={productForm.handleChange}
                            value={productForm.values.description}
                            placeholder='description' className='p-2 text-md rounded-lg border'
                        />
                    </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Addproduct