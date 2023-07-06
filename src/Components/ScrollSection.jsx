import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import VSectionOne from "./VSection1.jsx";
import HSectionOne from "./HSection1.jsx";
import VSectionTwo from "./VSection2.jsx";
import HSectionTwo from "./HSection2.jsx";

function ScrollSection() {

	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {

			const pin = gsap.fromTo(sectionRef.current, {
				translateX: 0
			}, {
				translateX: "-300vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				}
			})

		return () => {
			pin.kill()
		}
	}, [])

	return(
		<section className="scroll-section-outer">
			<div ref={triggerRef}>
				<div 
				ref={sectionRef}
				className="scroll-section-inner">
					<div className="scroll-section">
						<VSectionOne />
					</div>
					<div className="scroll-section">
						<HSectionOne />
					</div>
					<div className="scroll-section">
						<VSectionTwo />
					</div>
					<div className="scroll-section">
						<HSectionTwo />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ScrollSection;