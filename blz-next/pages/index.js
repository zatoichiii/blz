import React from 'react';
import Banner from "@/src/components/blocks/Banner";
import Stats from "@/src/components/blocks/Stats";
import About from "@/src/components/blocks/About";
import Photos from "@/src/components/blocks/Photos";
import Products from "@/src/components/blocks/Products";
import FAQ from '@/src/components/blocks/FAQ';
import NewsBlock from '@/src/components/blocks/NewsBlock/NewsBlock';
import Ticks from '@/src/components/blocks/TIcks';
import Client from "@/src/components/blocks/Client";
import AboutGLz from '@/src/components/blocks/AbotGlz';
import Download from '@/src/components/blocks/Download';
import OurClients from '@/src/components/blocks/OurClients';

const about = {
    title: "Производство BLZ",
    description: "Унаследуйте дух шведского индустриализма и создайте модель лифтов высокого класса. <br/> Разумно определите возможность сбоя в работе лифта. Когда лифт выходит из строя или выходит из строя из-за перебоев в подаче электроэнергии, система автоматически переключается и берет на себя основную систему управления. <br/> Без помощи обслуживающего и аварийно-спасательногоперсонала машина поднимается на ближайший этаж.После остановки дверь лифта откроется автоматически, так что оказавшиеся в ловушке пассажиры смогут безопасно выйти из лифта.",
    image: "/images/Main/fabric.png",
    href: "/about",
}

const security = {
    title: "Безопасность",
    description: "Разумно определите возможность сбоя в работе лифта. Когда лифт выходит из строя или выходит из строя из-за перебоев в подаче электроэнергии, система автоматически переключается и берет на себя основную систему управления. <br/> Без помощи обслуживающего и аварийно-спасательногоперсонала машина поднимается на ближайший этаж.После остановки дверь лифта откроется автоматически, так что оказавшиеся в ловушке пассажиры смогут безопасно выйти из лифта.",
    image: "/images/Main/security.png",
    href: "/technologies",
}


export default function Page() {
    return (
        <>

        <div>

            <Banner/>
            <Stats/>
            <Products/>
            <AboutGLz/>
            <Download/>
            <OurClients/>
            <About item={about}/>
            <Photos/>
            <Ticks/>
            <About item={security}/>
            <FAQ/>
            <Client/>
            {/* <NewsBlock/> */}

        </div>
        </>
    );
};
