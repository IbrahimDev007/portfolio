import React from "react";
import content from '../content';
function Experience() {
	return (
		<>
			<div
				className="flex justify-center  p-10  w-full flex-col items-center bg-blue-900"
				style={{
					minHeight: "50vh",
					background: "#091C29",
				}}
				data-aos="zoom-in"
			>
				<div className="text-5xl p-4 m-2 text-white font-bold"> {content.Experience.title}</div>
				<div className="text-lg p-2 w-3/5 text-white text-center">{content.Experience.desc}</div>
				<div className="flex w-2/5 flex-row p-2 m-1">
				{content.Experience.company.map((exp,indx)=>
				
				<div
					className="border-rounded  border-2 w-4/5 h-5/5 sm:w-full p-2 m-1  border-green-700 "
					data-aos="flip-left"
					style={{
						backgroundImage:
							"radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )",
					}}
				>  <div className="flex justify-center flex-col  items-center">
					<img
						src={exp.img}
						className="inline object-cover w-20 h-20 mr-2 rounded-full"
						alt={exp.title}
					/>
					<div className="text-xl p-4 m-2 font-bold text-white w-full ">
						{exp.title}
					</div>
					<div className="text-sm p-2 text-white w-full"><b>Preiod:</b>{exp.experience}</div>
					<div className="text-sm  p-2 text-white  w-full"><b>Role:</b>{exp.Role}</div>
					<div className="text-sm  p-2 text-white  w-full"><b>Desc:</b>{exp.desc}</div>
				</div>
				</div>
				
				)
} </div>
			</div>
		</>
	);
}

export default Experience;
