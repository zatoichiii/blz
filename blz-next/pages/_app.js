import "/styles/global.css"
import Header from "@/src/components/blocks/Header";
import React from "react";
import Footer from "@/src/components/blocks/Footer";
import Call from "@/src/components/blocks/Call";
import Buttons from "@/src/components/blocks/Buttons";
import Head from "next/head";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import MaintenanceBanner from "@/src/components/blocks/MaintenanceBanner/MaintenanceBanner";
function MyApp({Component, pageProps, router}) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
			scriptProps={{
				async: false,
				defer: false,
				appendTo: "head",
				nonce: undefined,
			}}
		>
			<Head>
				<link rel='shortcut icon' href='/img/favicon.png' />
			</Head>
			<Header/>
			<Buttons/>
			<Component {...pageProps}/>
			<Call/>
			<Footer/>
			<MaintenanceBanner />
		</GoogleReCaptchaProvider>
	)
}

export default MyApp