import "/styles/global.css"
import Header from "@/src/components/blocks/Header";
import React from "react";
import Footer from "@/src/components/blocks/Footer";
import Call from "@/src/components/blocks/Call";
import Buttons from "@/src/components/blocks/Buttons";

function MyApp({Component, pageProps, router}) {
	return (
		<>
			<Header/>
			<Buttons/>
			<Component {...pageProps}/>
			<Call/>
			<Footer/>
		</>
	)
}

export default MyApp
