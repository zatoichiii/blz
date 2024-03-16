import React from 'react';
import NewsElemnt from "@/src/components/blocks/NewsElement";
import Banner_News from '@/src/components/blocks/Banner_News';
import {news} from "@/newsConfig";

export default function  ProductPage({news}) {
    return (
        <div>
            <Banner_News/>
            <NewsElemnt news={news} />

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