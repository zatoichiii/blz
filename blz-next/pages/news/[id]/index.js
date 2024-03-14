import React from 'react';
import Banner_News from '@/src/components/blocks/Banner_News';
import NewsBlock from '@/src/components/blocks/NewsBlock/NewsBlock';
import {news} from "@/newsConfig";

export default function  ProductPage({news}) {
    return (
        <div>
            <Banner_News/>
            <div>{news.id}</div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const id = context.query.id
    const media = news.filter((item)=>item.id === id) || {}
    if(media.length === 0){
        return {
            redirect: {
                destination: `/`,
                permanent: true,
            },
        }
    }
    return{
        props: {news: media[0]}
    }
}