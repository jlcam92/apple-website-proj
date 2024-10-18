import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ModelView } from "./ModelView";
import React, { LegacyRef, Ref, useEffect, useRef, useState } from "react";
import { yellowImg } from "utils";
import { PhoneModelState } from "../../types/PhoneModelState";
import { PhoneColors } from "types/enums";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "src/constants";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { animateWithGsapTimeline } from "src/utils/animations";

export const Model = () => {
	const [size, setSize] = useState<string>("small");
	const [model, setModel] = useState<PhoneModelState>({
		title: "iPhone 15 Pro in Natural Titanium",
		color: [PhoneColors.HeatheredGray, PhoneColors.PaleOrange, PhoneColors.DimGray],
		img: yellowImg
	});

	const cameraControlSmall: LegacyRef<OrbitControlsImpl> | undefined = React.createRef();
	const cameraControlLarge: LegacyRef<OrbitControlsImpl> | undefined = React.createRef();

	const small: Ref<THREE.Group<THREE.Object3DEventMap>> = useRef(new THREE.Group());
	const large: Ref<THREE.Group<THREE.Object3DEventMap>> = useRef(new THREE.Group());

	const [smallRotation, setSmallRotation] = useState<number | undefined>(0);
	const [largeRotation, setLargeRotation] = useState<number | undefined>(0);

	const tl: gsap.core.Timeline = gsap.timeline();

	useEffect(() => {
		if (size === "large") {
			animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
				transform: "translateX(-100%)",
				duration: 2
			});
		}
		if (size === "small") {
			animateWithGsapTimeline(tl, large, largeRotation, "#view1", "#view2", {
				transform: "translateX(0)",
				duration: 2
			});
		}
	}, [size, tl, large, largeRotation, smallRotation]);

	useGSAP(() => {
		gsap.to("#heading", { y: 0, opacity: 1 });
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width">
				<h1
					id="heading"
					className="section-heading">
					Take a closer look
				</h1>
				<div className="flex flex-col items-center mt-5">
					<div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
						<ModelView
							index={1}
							groupRef={small}
							gsapType="view1"
							controlRef={cameraControlSmall}
							setRotationSize={setSmallRotation}
							item={model}
							size={size}
						/>
						<ModelView
							index={2}
							groupRef={large}
							gsapType="view2"
							controlRef={cameraControlLarge}
							setRotationSize={setLargeRotation}
							item={model}
							size={size}
						/>

						<Canvas
							className="w-full h-full"
							style={{
								position: "fixed",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								overflow: "hidden"
							}}
							eventSource={document.getElementById("root")!}>
							<View.Port />
						</Canvas>
					</div>
					<div className="mx-auto w-full">
						<p className="text-sm font-light text-center mb-5">{model.title}</p>
						<div className="flex-center">
							<ul className="color-container">
								{models.map((item, i) => (
									<li
										key={i}
										className="w-6 h-6 rounded-full mx-2 cursor-pointer"
										style={{ backgroundColor: item.color[0] }}
										onClick={() => setModel(item)}
									/>
								))}
							</ul>
							<button className="size-btn-container">
								{sizes.map(({ label, value }) => (
									<span
										key="label"
										className="size-btn"
										style={{
											backgroundColor: size === value ? "white" : "transparent",
											color: size === value ? "black" : "white"
										}}
										onClick={() => setSize(value)}>
										{label}
									</span>
								))}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
