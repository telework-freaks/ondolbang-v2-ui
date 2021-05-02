import * as React from "react";
import $ from "./SearchResultIndicator.module.scss";

type SearchResultIndicatorProps = {
	num: number;
	filters?: [string, string][]; // [필터이름, 필터내용], [...]
};

export const SearchResultIndicator: React.FC<SearchResultIndicatorProps> = (
	props: SearchResultIndicatorProps
) => {
	const searchFilters: [string, string][] = props.filters ?? [
		["조건1", "내용1"],
		["조건2", "조금조금조금조금 긴 내용2"],
		["조건3", "내용3"],
		["조건4", "내용4"],
	];
	const staticLabel = "의 검색결과";

	const rotateRef = React.useRef<HTMLDivElement>(null);
	const [idx, setIdx] = React.useState<number>(1);

	React.useEffect(() => {
		const elem = rotateRef.current;
		let tick: any;
		if (elem !== undefined && elem !== null) {
			tick = setInterval(() => {
				elem.scrollTop = idx === 0 ? 0 : elem.scrollTop + 20;
				setIdx((idx + 1) % searchFilters.length);
			}, 1500);
		}

		return () => clearInterval(tick);
	});

	return (
		<div className={$.container}>
			<div className={$.resolver_container}>
				<div ref={rotateRef} className={$.resolver_wrapper}>
					{searchFilters.map((entry, i) => (
						<div key={i}>{`${
							entry[0].length < 6 ? entry[0] : entry[0].substr(0, 6) + "..."
						}: ${
							entry[1].length < 6 ? entry[1] : entry[1].substr(0, 6) + "..."
						}`}</div>
					))}
				</div>
				<div>의 검색결과</div>
			</div>

			<div className={$.result_num_container}>
				총 <span className={$.number}>{props.num}</span>건
			</div>
		</div>
	);
};
