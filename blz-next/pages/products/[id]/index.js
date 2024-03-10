import React from 'react';
import Product from "@/src/components/blocks/Product";
import {products} from "@/productConfig";
import Banner_Products from '@/src/components/blocks/Banner_Products';

export default function  ProductPage({lift}) {
    return (
        <div>
            <Banner_Products/>
            <Product lift={lift} />
        </div>
    );
};

export async function getServerSideProps(context) {
    const id = context.query.id
    const lift = products.filter((item)=>item.id === id) || {}
    if(lift.length === 0){
        return {
            redirect: {
                destination: `/`,
                permanent: true,
            },
        }
    }
    return{
        props: {lift: lift[0]}
    }
}