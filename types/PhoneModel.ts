import { PhoneColors } from "./enums";

export interface PhoneModel {
	id: number;
	title: string;
	color: PhoneColors[];
	img: string;
}
