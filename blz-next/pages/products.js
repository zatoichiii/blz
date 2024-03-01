import Header from "@/src/components/blocks/Header";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";
import React from "react";
import Banner_Products from "@/src/components/blocks/Banner_Products";
import Products from "@/src/components/blocks/Products";




export default function Page() {
    return (
        <div>
            <Header/>
              <Banner_Products/>
              <Products/>
              <Call/>
              <Footer/>
        </div>
    );
};