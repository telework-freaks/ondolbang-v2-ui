import * as React from "react";
import $ from "./SideBar.module.scss";

type SideBarProps = {
	navHeight: string;
};

export const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
	return (
		<div
			className={$.container}
			style={{ height: `calc(100% - ${props.navHeight})`, top: props.navHeight }}
		>
			<div className={$.result_summary}>
			</div>
		</div>
	);
};
