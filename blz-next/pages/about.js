import Header from "@/src/components/blocks/Header";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";
import React from "react";
import Banner_About from "@/src/components/blocks/Banner_About";
import Tittle from "@/src/components/blocks/Tittle";
import Facts from "@/src/components/blocks/Facts";
import Background from "@/src/components/blocks/Background";
import Documents from "@/src/components/blocks/Documents";
import DocumentsMy from "@/src/components/blocks/DocumentsMy";

export default function Page() {
    return (
        <div>

             <Banner_About/>
             <Tittle/>
             <Facts/>
             <DocumentsMy/>
             <Background/>


        </div>
    );
};