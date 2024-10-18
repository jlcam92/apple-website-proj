import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React, { LegacyRef, Ref, Suspense } from "react";
import * as THREE from "three";
import { PhoneModelState } from "types/PhoneModelState";
import Lights from "./Lights";
import { Iphone } from "./Iphone";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { Loader } from "./Loader";

interface ModelViewProps {
	index: number;
	groupRef: Ref<THREE.Group<THREE.Object3DEventMap>>;
	gsapType: string;
	controlRef: LegacyRef<OrbitControlsImpl> | undefined;
	setRotationSize: React.Dispatch<React.SetStateAction<number | undefined>>;
	item: PhoneModelState;
	size: string;
}

export const ModelView: React.FC<ModelViewProps> = ({
	index,
	groupRef,
	gsapType,
	controlRef,
	setRotationSize,
	item,
	size
}) => {
	return (
		<View
			index={index}
			id={gsapType}
			className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}>
			<ambientLight intensity={0.3} />
			<PerspectiveCamera
				makeDefault
				position={[0, 0, 4]}
			/>
			<Lights />
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.4}
				target={new THREE.Vector3(0, 0, 0)}
				onEnd={() => {
					if (
						controlRef &&
						typeof controlRef !== "string" &&
						"current" in controlRef &&
						controlRef.current
					) {
						setRotationSize(controlRef.current.getAzimuthalAngle());
					}
				}}
			/>
			<group
				ref={groupRef}
				name={`${index === 1 ? "small" : "large"}`}
				position={[0, 0, 0]}>
				<Suspense fallback={<Loader />}>
					<Iphone
						scale={
							index === 1 ? new THREE.Vector3(15, 15, 15) : new THREE.Vector3(17, 17, 17)
						}
						item={item}
						size={size}
					/>
				</Suspense>
			</group>
		</View>
	);
};
