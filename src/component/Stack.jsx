import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import React from "react";
import './stack.scss';
export default function Stack() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-white fomt-dosis" id="stack">
			<h1 className="text-5xl font-bold">Stack I Use</h1>
			<div className="flex flex-wrap justify-center mt-10">
				{content.stack.tech.map((teck, index) =>  
					<span  key= {index}className={`${index%2 ===0 ?'btn--wut':'btn--wiggle'} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}>
						<LazyLoadImage src={teck.img} alt={teck.alt} />
					</span>
				)}
			</div>
			<p className="w-1112 md:max-w-xl text-xl text-center mt-10">
                {content.stack.desc}
            </p>
		</div>
	);
}
