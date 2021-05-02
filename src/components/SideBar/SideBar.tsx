import * as React from "react";
import $ from "./SideBar.module.scss";

import { SearchResultItem } from "@components/SideBar/SearchResultItem/SearchResultItem";

type SideBarProps = {
	navHeight: string;
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

	return (
		<div
			className={$.container}
			style={{
				height: `calc(100% - ${props.navHeight})`,
				top: props.navHeight,
			}}
		>
			<div className={$.result_summary}></div>

				{dataPoly.map((data, i) => (
					<div className={$.result_wrapper}>
						<SearchResultItem key={i} {...data}></SearchResultItem>
					</div>
				))}
		</div>
	);
};
