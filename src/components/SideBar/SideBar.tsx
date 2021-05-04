import * as React from "react";
import $ from "./SideBar.module.scss";

import { SearchResultItem } from "@components/SideBar/SearchResultItem/SearchResultItem";
import { SearchResultIndicator } from "@components/SideBar/SearchResultIndicator/SearchResultIndicator";

type SideBarProps = {
	navHeight: string;
	sidebar: "hidden" | "shown";
};

export const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
	const testName = "테스트 검색결과";
	const dataPairs: [number, number][] = [
		[123456, 123967],
		[123456, 123967],
		[123456, 123967],
		[123456, 123967],
	];
	const dataMono = {
		name: testName,
		data: dataPairs,
	};

	const dataPoly = [
		JSON.parse(JSON.stringify(dataMono)),
		JSON.parse(JSON.stringify(dataMono)),
		JSON.parse(JSON.stringify(dataMono)),
		JSON.parse(JSON.stringify(dataMono)),
		JSON.parse(JSON.stringify(dataMono)),
		JSON.parse(JSON.stringify(dataMono)),
	];

	const [isHidden, setHidden] = React.useState<boolean>(
		props.sidebar === "hidden"
	);
	const [isTogglerHidden, setTogglerHidden] = React.useState<boolean>(
		props.sidebar === "hidden"
	);

	const ref = React.useRef<HTMLDivElement>(null);
	const togglerRef = React.useRef<HTMLDivElement>(null);
	const toggle = (e: any) => {
		setHidden(!isHidden);
		setTogglerHidden(!isTogglerHidden);
	};

	let containerClassNames = $.container;
	if (isHidden) containerClassNames += ` ${$.hidden}`;

	let togglerClassNames = $.toggler_container;
	if (isTogglerHidden) togglerClassNames += ` ${$.toggler_hidden}`;

	return (
		<>
			<div
				ref={ref}
				className={containerClassNames}
				style={{
					height: `calc(100% - ${props.navHeight})`,
					top: props.navHeight,
				}}
			>
				<div className={$.result_indicator}>
					<SearchResultIndicator num={dataPoly.length}></SearchResultIndicator>
				</div>

				{dataPoly.map((data, i) => (
					<div key={i} className={$.result_wrapper}>
						<SearchResultItem {...data}></SearchResultItem>
					</div>
				))}
			</div>

			<div onClick={toggle} className={togglerClassNames}>
				<div className={$.triangle}></div>
			</div>
		</>
	);
};
