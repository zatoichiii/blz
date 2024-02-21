import React from 'react';
import Header from "@/src/components/blocks/Header";
import Banner from "@/src/components/blocks/Banner";
import Stats from "@/src/components/blocks/Stats";
import About from "@/src/components/blocks/About";
import Photos from "@/src/components/blocks/Photos";
import Products from "@/src/components/blocks/Products";
import Security from "@/src/components/blocks/Security";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";

export default function Page() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Stats/>
            <About/>
            <Photos/>
            <Products/>
            <Security/>
            <Call/>
            <Footer/>
        </div>
    );
};
