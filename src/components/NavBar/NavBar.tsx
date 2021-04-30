import * as React from "react";
import $ from "./NavBar.module.scss";

import { SearchBar } from "@components/SearchBar/SearchBar";

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
	return (
		<nav className={$.container}>
			<span className={$.logo}>Ondolbang</span>
			<SearchBar></SearchBar>
		</nav>
	);
};
