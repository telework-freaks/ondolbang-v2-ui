import Head from "next/head";
import Link from "next/link";
import $ from "../styles/Home.module.scss";

const ondolbang = <div className={$.ondolbang}>Ondolbang</div>;
const copy = (
	<div className={$.copy}>
		주거목적 공매물건 검색은 <span>온돌방</span>에서
	</div>
);
const scrollIcon = (
	<svg
		className={$.scroll_icon}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="75"
		height="75"
	>
		<path fill="none" d="M0 0h24v24H0z" />
		<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
	</svg>
);
const view = (
	<div className={$.view}>
		{ondolbang}
		{copy}
		{scrollIcon}
	</div>
);

const pic1 = <div className={$.img}>이미지를 넣을 공간</div>;
const copy1 = (
	<span className={$.subcopy}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="50"
			height="50"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
		</svg>
		간편하게 검색 필터를 설정합니다
	</span>
);
const view1 = (
	<div className={$.subview}>
		{pic1}
		{copy1}
	</div>
);

const pic2 = <div className={$.img}>이미지를 넣을 공간</div>;
const copy2 = (
	<span className={$.subcopy}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="50"
			height="50"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
		</svg>
		한눈에 입찰정보를 확인합니다
	</span>
);
const view2 = (
	<div className={$.subview}>
		{copy2}
		{pic2}
	</div>
);

const pic3 = <div className={$.img}>이미지를 넣을 공간</div>;
const copy3 = (
	<span className={$.subcopy}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="50"
			height="50"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" />
		</svg>
		자세한 정보를 확인합니다
	</span>
);
const view3 = (
	<div className={$.subview}>
		{pic3}
		{copy3}
	</div>
);

const copy4 = (
	<Link href="/search">
		<a>
			<span className={$.subcopy}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="50"
					height="50"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
				</svg>
				지금 검색하기
			</span>
		</a>
	</Link>
);
const view4 = <div className={$.subview}>{copy4}</div>;

export default function Home() {
	return (
		<>
			<Head>
				<script
					type="text/javascript"
					src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APIKEY}&libraries=services,clusterer,drawing`}
				></script>
			</Head>
			<div className={$.container}>
				{view}
				{view1}
				{view2}
				{view3}
				{view4}
			</div>
		</>
	);
}
