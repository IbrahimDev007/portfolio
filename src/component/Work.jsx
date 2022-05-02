import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import AOS from "aos";
import "aos/dist/aos.css";

export const Work = () => {
	useEffect(() => {
		AOS.init();
		AOS.refreshHard();
	}, []);
	return (
		<div
			className="w-cover sm:w-full justify-center flex bg-sky-900 text-white"
			style={{
				background: "#091C29",
			}}
		>
			{" "}
			<div
				className="min-h-screen flex justify-center items-center flex-col"
				data-aos="zoom-in"
				id="mywork"
			>
				<h1 className="text-5xl   font-dosis font-bold">Projects</h1>
				<p className="text-white-600 text-2xl font-dosis mb-10">I have done</p>
				<div className="flex justify-center items-center  flex-wrap  ">
					{content.work.map((work, index) => {
						return (
							<div
								key={index}
								className="max-w-sm  text-center border-rounded py-4 items-center justify-center flex flex-col overflow-hidden p-2 m-1  shadow-lg"
								data-aos="flip-left"
							>
								<LazyLoadImage
									src={work.img}
									alt={work.alt}
									className=" flex m-4 items-center justify-center object-cover  hover:bg-indigo-700"
									width="300px"
								/>

								<div className="p-6 p-4 flex  items-center flex-col ">
									<div className="font-bold text-xl mb-2">
										{work.projectName}
									</div>
									<div className="justify-start flex-col">
										<p className="text-white text-base ">{work.desc}</p>
										<div className="flex items-center justify-between m-1 p-4">
											<button
												class=" text-white  w-17  h-6 flex  justify-center active:bg-sky-600 font-bold uppercase text-xs p-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												style={{
													backgroundColor: "#0c7d94",
												}}
												type="button"
											>
												<a href={work.projectDemo}>{work.button1}</a>
											</button>
											<button
												class=" text-white w-17  h-6 flex  justify-center items-center  active:bg-sky-600 font-bold uppercase text-xs  p-2 rounded shadow hover:shadow-md outline-none focus:outline-none m-1 ease-linear transition-all duration-150"
												style={{
													backgroundColor: "#0c7d94",
												}}
												type="button"
											>
										<a href={work.PrjectCode}>{work.button2}</a>		
											</button>
										</div>
										<div className="px-6 pb-2  flex itmes-center justify-center ">
											<span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
												#{work.item}
											</span>
											<span className="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
												#{work.item2}
											</span>
											<span className="inline-block bg-blue-900 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
												#{work.item3}
											</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
