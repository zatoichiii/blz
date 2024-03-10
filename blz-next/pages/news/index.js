import Header from "@/src/components/blocks/Header";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";
import React from "react";
import NewsBlock from "@/src/components/blocks/NewsBlock/NewsBlock";
import Banner_News from "@/src/components/blocks/Banner_News";





export default function Page() {
    return (
        <div>
              <Header/>
              <Banner_News/>
              <NewsBlock/>
              <Call/>
              <Footer/>
        </div>
    );
};