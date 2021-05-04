import * as React from "react";
import $ from "./SearchResultItem.module.scss";

import { IconHolder } from "@components/IconHolder/IconHolder";

type SearchResultItemProps = {
	name: string;
	data: [number, number][]; // [PBCT_NO, PLNM_NO]: 공매번호, 공고번호
};

export const SearchResultItem: React.FC<SearchResultItemProps> = (
	props: SearchResultItemProps
) => {
	return (
		<div className={$.container}>
			<div className={$.data_name}>
				<span>{props.name}</span>
				<div className={$.data_name_icons}>
					<IconHolder iconPath="question.svg" width="24px" height="24px"></IconHolder>
					<IconHolder iconPath="map.svg" width="24px" height="24px"></IconHolder>
				</div>
			</div>
			{props.data.map((entry, i) => (
				<div key={i} className={$.data_row}>
					<span>공매번호: {entry[0]} / 공고번호: {entry[1]}</span>
					<IconHolder iconPath="question.svg" width="12px"></IconHolder>
				</div>
			))}
		</div>
	);
};
