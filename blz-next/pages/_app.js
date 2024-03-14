import "/styles/global.css"
import Header from "@/src/components/blocks/Header";
import React from "react";
import Footer from "@/src/components/blocks/Footer";
import Call from "@/src/components/blocks/Call";
import Buttons from "@/src/components/blocks/Buttons";
import Head from "next/head";

function MyApp({Component, pageProps, router}) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/img/favicon.png' />
			</Head>
			<Header/>
			<Buttons/>
			<Component {...pageProps}/>
			<Call/>
			<Footer/>
		</>
	)
}

export default MyApp
