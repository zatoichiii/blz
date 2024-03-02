import React from 'react';
import Product from "@/src/components/blocks/Product";
import {products} from "@/productConfig";

export default function  ProductPage({lift}) {
    return (
        <div>
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