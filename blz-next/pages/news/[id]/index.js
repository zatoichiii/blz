import React from 'react';
import {products} from "@/productConfig";
import Banner_News from '@/src/components/blocks/Banner_News';
import NewsBlock from '@/src/components/blocks/NewsBlock/NewsBlock';

export default function  ProductPage({news}) {
    return (
        <div>
            <Banner_News/>
            <NewsBlock news={news} />
        </div>
    );
};

export async function getServerSideProps(context) {
    const id = context.query.id
    const news = products.filter((item)=>item.id === id) || {}
    if(news.length === 0){
        return {
            redirect: {
                destination: `/`,
                permanent: true,
            },
        }
    }
    return{
        props: {news: news[0]}
    }
}