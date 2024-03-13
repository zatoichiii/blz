import Header from "@/src/components/blocks/Header";
import Call from "@/src/components/blocks/Call";
import Footer from "@/src/components/blocks/Footer";
import React from "react";
import Banner_Technologies from "@/src/components/blocks/Banner_Technologies";
import Experts from "@/src/components/blocks/Experts";
import Info from "@/src/components/blocks/Info";
import Possibility from "@/src/components/blocks/Possibility";
import Client from '@/src/components/blocks/Client';




export default function Page() {
    return (
        <div>

              <Banner_Technologies/>
              <Experts/>
              <Info/>
              <Possibility/>
              <Client/>

        </div>
    );
};