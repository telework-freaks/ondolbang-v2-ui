import * as React from "react";
import $ from "./NavBar.module.scss";

import { SearchBar } from "@components/SearchBar/SearchBar";

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
	return (
		<nav className={$.container}>
			<a href="/"><span className={$.logo}>Ondolbang</span></a>
			<SearchBar></SearchBar>
		</nav>
	);
};
