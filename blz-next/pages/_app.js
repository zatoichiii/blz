import "/styles/global.css"
import Header from "@/src/components/blocks/Header";
import React from "react";
import Footer from "@/src/components/blocks/Footer";
import Call from "@/src/components/blocks/Call";



function MyApp({Component, pageProps, router}) {
	return (
		<>
			<Header/>
			<Component {...pageProps}/>
			<Call/>
			<Footer/>
		</>
	)
}

export default MyApp
