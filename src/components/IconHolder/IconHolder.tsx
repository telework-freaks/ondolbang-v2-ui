import * as React from "react";
import $ from "./IconHolder.module.scss";

type IconHolderProps = {
	iconPath: string;
	width: string;
	height?: string;
};

export const IconHolder: React.FC<IconHolderProps> = (
	props: IconHolderProps
) => {
	return (
		<div className={$.container}>
			<img
				className={$.icon}
				src={props.iconPath}
				alt="image not found"
				style={{ width: props.width, height: props.height ?? "auto" }}
			/>
		</div>
	);
};
