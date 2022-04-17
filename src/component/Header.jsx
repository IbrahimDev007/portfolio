import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import Typical from "react-typical";
import { Link as Scroll } from "react-scroll";
import Particles from "react-tsparticles";

export default function Header() {
	const [animated, setAnimated] = useState(false);
	useEffect(() => {
		setAnimated(true);
	}, []);

	return (
 
		<div
		
			className="min-h-screen flex item-center justify-between"
		>
      
			<Particles
      	style={{
          backgroundColor: "#091C29",
        }}
    options={{
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        number: {
          value: 200,
          limit: 300,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.5,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: "#ffffff",
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      backgroundMask: {
        enable: true,
        cover: {
          color: {
            value: '#091C29'
          }
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
      retina_detect: true,
      fps_limit: 60,
      background: {
        image: "url('https://particles.js.org/images/background3.jpg')"
      }
    }}
  />
			<div
				className="w-full mx-auto flex flex-col-reverse md:flex-row-reverse sm:flex-col-reverse items-center justify-between"
				id="my"
			>
				<div className="h-full w-4/12 ">
					<LazyLoadImage src={content.header.img} efeect="blur" />
				</div>
				<div className="p-15 m-10 text-white font-dosis text-center">
					<h2
						className={`${
							animated ? "translate-y-18" : " opacity-0"
						}transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
					>
						{content.header.text[0]}
						<br />
						{content.header.text[1]}
					</h2>
					<h1
						className={`${
							animated ? "translate-y-18" : " opacity-0"
						} transform transition-2000 ease-in-outfont-bold text-2xl text-gray-1000`}
					>
						{content.header.text[2]}
						{""}
						<Typical
							steps={content.header.typical}
							loop={Infinity}
							wrapper="p"
							className="inline-block"
						/>
					</h1>
					<Scroll to="stack" smooth={true}>
						<button
							className={` animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
								animated ? "translate-y-0" : "styleTranslate"
							} transition-2000`}
						>
							{content.header.btnText}
						</button>
					</Scroll>
				</div>
			</div>

      
		</div>

 
	);
}
