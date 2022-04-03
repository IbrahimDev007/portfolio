import React from "react";
import {Link as Scroll} from 'react-scroll';
import content from "../content";

export default function Navigation() {
	return (
		<div
			style={{
				background: "#091c29",
			}}
		>
			<div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white ">
				<h1 className="text-3xl font-bold">
					{content.nav.logo}
					{""}
					<span className="w-3 h-3 bg-red-500 inline-block rounded-full "></span>
				</h1>
				<div>
					{content.nav.links.map((link, indx) => (
						<span key={indx} className="text-xl mr-4">
						<Scroll to={link.text1} smooth={true} className="px-4 py-3 text-lg uppercase text-white rounded-lg hover:bg-blue-700"> 
							{link.text}
							</Scroll>
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
