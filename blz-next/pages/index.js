import React from 'react';
import Banner from "@/src/components/blocks/Banner";
import Stats from "@/src/components/blocks/Stats";
import About from "@/src/components/blocks/About";
import Photos from "@/src/components/blocks/Photos";
import Products from "@/src/components/blocks/Products";
import Security from "@/src/components/blocks/Security";
import FAQ from '@/src/components/blocks/FAQ';
import NewsBlock from '@/src/components/blocks/NewsBlock/NewsBlock';
import MyMap from '@/src/components/blocks/MyMap';
import Client from '@/src/components/blocks/Client';
import Ticks from '@/src/components/blocks/TIcks';
import Head from "next/head";


export default function Page() {
    return (
        <>

        <div>

            <Banner/>
            <Stats/>
            <About/>
            <Photos/>
            <Products/>
            <Security/>
            <Ticks/>
            <FAQ/>
            <NewsBlock/>
            <Client/>

        </div>
        </>
    );
};
