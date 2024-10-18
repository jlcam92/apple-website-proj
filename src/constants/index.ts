import { HighlightSlide } from "../../types/HighlightSlide";
import { PhoneModel } from "../../types/PhoneModel";
import { PhoneSize } from "../../types/PhoneSize";
import { NavLists, PhoneColors } from "../../types/enums";

import {
	blackImg,
	blueImg,
	highlightFirstVideo,
	highlightFourthVideo,
	highlightSecondVideo,
	highlightThirdVideo,
	whiteImg,
	yellowImg
} from "utils";

export const navLists: NavLists[] = [
	NavLists.Store,
	NavLists.Mac,
	NavLists.Iphone,
	NavLists.Support
];

export const hightlightsSlides: HighlightSlide[] = [
	{
		id: 1,
		textLists: ["Enter A17 Pro.", "Game‑changing chip.", "Groundbreaking performance."],
		video: highlightFirstVideo,
		videoDuration: 4
	},
	{
		id: 2,
		textLists: ["Titanium.", "So strong. So light. So Pro."],
		video: highlightSecondVideo,
		videoDuration: 5
	},
	{
		id: 3,
		textLists: [
			"iPhone 15 Pro Max has the",
			"longest optical zoom in",
			"iPhone ever. Far out."
		],
		video: highlightThirdVideo,
		videoDuration: 2
	},
	{
		id: 4,
		textLists: ["All-new Action button.", "What will yours do?."],
		video: highlightFourthVideo,
		videoDuration: 3.63
	}
];

export const models: PhoneModel[] = [
	{
		id: 1,
		title: "iPhone 15 Pro in Natural Titanium",
		color: [PhoneColors.HeatheredGray, PhoneColors.PaleOrange, PhoneColors.DimGray],
		img: yellowImg
	},
	{
		id: 2,
		title: "iPhone 15 Pro in Blue Titanium",
		color: [PhoneColors.BlueTitanium, PhoneColors.LightBlue, PhoneColors.BlackRussian],
		img: blueImg
	},
	{
		id: 3,
		title: "iPhone 15 Pro in White Titanium",
		color: [PhoneColors.QuillGray, PhoneColors.White, PhoneColors.QuillGray],
		img: whiteImg
	},
	{
		id: 4,
		title: "iPhone 15 Pro in Black Titanium",
		color: [PhoneColors.BlackBoudoir, PhoneColors.DarkGray2, PhoneColors.BlackPhone],
		img: blackImg
	}
];

export const sizes: PhoneSize[] = [
	{ label: '6.1"', value: "small" },
	{ label: '6.7"', value: "large" }
];

export const footerLinks: string[] = [
	"Privacy Policy",
	"Terms of Use",
	"Sales Policy",
	"Legal",
	"Site Map"
];
