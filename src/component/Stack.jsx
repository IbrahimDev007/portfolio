import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import React from "react";
import "./stack.scss";

export default function Stack() {
	return (
		<div
			className="min-h-screen flex flex-col items-center justify-center bg-white fomt-dosis"
			id="stack"
		>
			<h1 className="text-5xl font-bold">Stack I Use</h1>
			<div className="flex flex-wrap justify-center mt-10">
				{content.stack.tech.map((teck, index) => (
					<span
						key={index}
						className={`${
							index % 2 === 0 ? "btn--wut" : "btn--wiggle"
						} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}
					>
						<LazyLoadImage src={teck.img} alt={teck.alt} />
					</span>
				))}
			</div>
			<p className="w-1112 md:max-w-xl p-1 text-xl text-center mt-10">
				{content.stack.desc}
			</p>
			<div className="w-3/5 h-3/5 ">
			
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel"
				>
					<ol className="carousel-indicators">
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="0"
							className="active"
						></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100 h-100" src="/assets/bluberr_moui.jpg" alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100  h-100" src="/assets/landing_page_dex.png" alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100  h-100" src="/assets/yoga_web.png" alt="third slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100  h-100" src="/assets/Dashboard1.jpg" alt="Forth slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100 h-100" src="/assets/mobile_ui_music.jpg" alt="Fifth slide" />
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon bg-black"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon bg-black"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	);
}
