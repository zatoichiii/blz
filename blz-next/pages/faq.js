import Header from "@/src/components/blocks/Header";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";
import React from "react";
import Banner_FAQ from "@/src/components/blocks/Banner_FAQ";
import FAQ from "@/src/components/blocks/FAQ";




export default function Page() {
    return (
        <div>
            <Header/>
            <Banner_FAQ/>
            <FAQ/>
            <Call/>
            <Footer/>
        </div>
    );
};