import * as React from "react";
import $ from "./MapInitializer.module.scss";

declare global {
	interface Window {
		kakao: any;
	}
}

const MapInitializer: React.FC<{}> = (props: {}) => {
	React.useEffect(() => {
		const container = document.getElementById("map");
		const options = {
			center: new window.kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};

		const map = new window.kakao.maps.Map(container, options);
	}, []);

	return (
		<div className={$.container}>
			<div
				id="map"
				style={{ width: "100vw", height: "calc(100vh - 75px)" }}
			></div>
		</div>
	);
};

export default MapInitializer;
