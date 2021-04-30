import * as React from "react";
import $ from "./SearchBar.module.scss";

import { IconHolder } from "@components/IconHolder/IconHolder";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
	return (
		<div className={$.container}>
			<IconHolder
				iconPath="/search.svg"
				width="30px"
				height="30px"
			></IconHolder>
			<input className={$.input} type="text" placeholder="input here"/>
		</div>
	);
};
