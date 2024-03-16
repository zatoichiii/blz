import Header from "@/src/components/blocks/Header";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";
import React from "react";
import Banner_Contact from "@/src/components/blocks/Banner_Contact";
import Contacts from "@/src/components/blocks/Contacts";
import MyMap from "@/src/components/blocks/MyMap";
import Faces from "@/src/components/blocks/Faces";



export default function Page() {
    return (
        <div>
            <Banner_Contact/>
            <Contacts/>
            <Faces/>
            <MyMap/>
        </div>
    );
};