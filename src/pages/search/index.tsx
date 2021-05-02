import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

import { NavBar } from "@components/NavBar/NavBar";
import MapInitializer from "@components/MapInitializer/MapInitializer";

// const MapInitializer = dynamic(
// 	() => import("@components/MapInitializer/MapInitializer"),
// 	{ loading: () => <div>loading maps...</div>, ssr: false }
// );

export default function Search() {
	return (
		<>
			<Head>
				<script
					type="text/javascript"
					src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APIKEY}&libraries=services,clusterer,drawing`}
				></script>
			</Head>
			<NavBar></NavBar>
			<MapInitializer></MapInitializer>
		</>
	);
}
