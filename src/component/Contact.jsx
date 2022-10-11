import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import "./stack.scss";

export default function Contact() {
	const [animated, setAnimated] = useState(false);
	useEffect(() => {
		setAnimated(true);
	}, []);
	const [Registert, setRegistert] = useState({
		name: "",
		email: "",
		text:"",
	});

	const handaleChangerEvent = (e) => {
		let { name, value } = e.target;
		return (
			setRegistert({ ...Registert, [name]: value }), console.log(Registert)
		);
	};

	const handaleSubmit = (e) => {
		e.preventDefault();
		let nameErr = "";	
		let emailErr = "";
		let emailRgex = RegExp(
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		);
		
		
		if (!Registert.name) {
			nameErr = "Name Is Not Valid";
			console.log(nameErr);
		} 
		else if (!emailRgex.test(Registert.email)) {
			emailErr = "email not valid";
			console.log(emailErr);
		}
		
		 else {
		
			localStorage.setItem('User',Registert);

		setRegistert({...Registert,email:"",text:"",name:""});
			console.log("every thing all right");
		}
	};



	return (
		<div
			className=" min-h-screen  flex justify-center items-center bg-white "
			id="mycontact"
		>
			<div
				style={{
					minHeight: "50vh",
					background: "#091C29",
				}}
				className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
				id="contact"
			>
				<LazyLoadImage
					effect="blur"
					src={content.contact.img}
					placeholderSrc={content.contact.imgPlaceholder}
					alt="profile"
					width="300px"
					className="m-10 transtion duration-2000 ease-in-out mx-auto"
				/>
				<div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
					<h1
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-3000 text-white text-5xl font-bold`}
					>
						{content.contact.title}
					</h1>
					<p
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-3000 text-white text-2xl`}
					>
						{content.contact.desc}
					</p>
					<div>
					<form action="post" onSubmit={handaleSubmit}>
						<div className="mt-4">
							<div>
								<label className="text-white block">Name:</label>
								<input
									type="text"
									name="name"
									value={Registert.name}
									onChange={handaleChangerEvent}
									placeholder="Name"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="text-white block">
									Email:
								
								</label>
								<input
									type="text"
									placeholder="Email"
									name="email"
									value={Registert.email}
									onChange={handaleChangerEvent}
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							
							<span className="text-sm text-red-400">
								Please input valid Email!
							</span>
							<div className="mt-4">
								<label className="text-white block">
									Project Description:
								</label>
						
								<textarea placeholder="Describe your project "
									name="text"
									value={Registert.text}
									onChange={handaleChangerEvent}
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								>

									</textarea>
							</div>
							<div className="flex">
								<button
									type="submit"
									value="submit"
									className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								>
									Submit
								</button>
							</div>
							
						</div>
					</form>

					</div>
					<div
						className={`flex ${
							animated ? "" : "translate-y-10 opacity-0"
						} transform transition duration-3000 `}
					>
						{content.contact.socials.map((social, index) => {
							return (
								<a href={`${social.link}`}>
								<LazyLoadImage
									effect="blur"
									className="m-2"
									width="50px"
									key={index}
									src={social.img}
									alt={social.alt}
									
								/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
