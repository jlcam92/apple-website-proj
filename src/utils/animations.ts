interface Transform {
	transform: string;
	duration: number;
}

import * as THREE from "three";

export const animateWithGsapTimeline = (
	timeline: gsap.core.Timeline,
	ref: React.RefObject<THREE.Group<THREE.Object3DEventMap>>,
	rotation: number | undefined,
	firstTarget: string,
	secondTarget: string,
	transform: Transform
) => {
	if (ref && "current" in ref && ref.current) {
		timeline.to(ref.current.rotation, {
			y: rotation,
			duration: 1,
			ease: "power2.inOut"
		});

		timeline.to(firstTarget, { ...transform, ease: "power2.inOut" }, "<");
		timeline.to(secondTarget, { ...transform, ease: "power2.inOut" }, "<");
	}
};
