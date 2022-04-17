export default {
	nav: {
		logo: "IKU...",
		links: [
			{ text: "Work", to: "mywork", text1: "mywork" },
			{ text: "Contact", to: "mycontact", text1: "contact" },
		],
	},

	header: {
		img: "/assets/profile1.jpg",
		imgPlaceholder: "",
		text: ["Hi!", "It's me Ibrahim.", "I am "],
		typical: [
			"Web Developer. 🖥",
			2000,
			"Graphic Designer. 📹",
			2000,
			"Digital Marketer.📈",
			2000,
		],
		btnText: "Discover More",
	},
	work: [
		{
			title: "Projects",
			img: "/assets/Porfolio_snap.PNG",
			projectName: "Portfolio",
			projectDemo: "https://personal-portfolio-007.netlify.app/",
			PrjectCode:"https://github.com/IbrahimDev007/portfolio",
			desc: "Personal Portfolio using React and Tailwind CSS using Multiple animations with API",
			item: "React",
			item2: "tailwind",
			item3: "scss",
		},
		{
			title: "Calculator",
			img: "/assets/calculator_snap.png",
			projectName: "Calculator",
			projectDemo: "https://calculator789.netlify.app/",
			PrjectCode:"https://github.com/IbrahimDev007/Calculator/tree/master",
			desc: "Default Calculator using functionality with react hook",
			item: "React",
			item2: "css",
			item3: "js",
		},
		{
			title: "Dashbord",
			img: "/assets/dashbord_snap.png",
			projectName: "Dashbord",
			projectDemo: "https://e-comerce-dashbord.netlify.app/",
			PrjectCode:"https://github.com/IbrahimDev007/React_Dashbord",
			desc: "E-commerce React Dashboard using Material Ui and data Display with chart",
			item: "React",
			item2: "MUI",
			item3: "js",
		},
	],
	Experience: {
		title: "Experience",
		desc: "After two different fields experienced decided to explore where my passion added to web development and next to blockchain development.",
		company: [
			{
				img: "/assets/CPC.PNG",
				title: "Comilla pest Control",
				experience: "4/Mo",
				Role: "Content-creator & Digital-Marketing",
			},
			{
				img: "/assets/GM.PNG",
				title: " Gaint Marketer",
				experience: "10/Mo",
				Role: "SEO-Specialist",
			},
		],
	},
	contact: {
		title: "Ping Me!",
		desc: "Hey, I'm Ibrahim Khalil Ullah (B.Sc in C.S.E), working a long day in react I decided to explore myself to be enthusiastic about the job. I am very excited to accomplish a new challenge to prepare to fulfill blockchain development for future",
		socials: [
			{
				alt: "facebook",
				img: "/assets/facebook.png",
				link: "https:www.facebook.com/lethal.boy",
			},
			{
				alt: "github",
				img: "/assets/github.png",
				link: "https:github.com/IbrahimDev007",
			},
			{
				alt: "link",
				img: "/assets/link.png",
				link: "https:www.linkedin.com/in/ibrahimdev",
			},
			{
				alt: "gmail",
				img: "/assets/gmail.png",
				link: "mailto:ibrahimpc14@gmail.com",
			},
		],
		img: "/assets/profile2.jpg",
		imgPlaceholder: "",
	},

	stack: {
		title: "Stack",
		tech: [
			{
				img: "/assets/mui.png",
				alt: "mui",
			},
			{
				img: "/logo512.png",
				alt: "react",
			},
			{
				img: "/assets/tailwind.png",
				alt: "tailwind",
			},
			{
				img: "/assets/js.png",
				alt: "js",
			},
		],
		desc: " This  react.js work. In personal work, many languages c,c++, Python, PHP, java though never settle down at last js claim to mind which role the world, and here I go 😊  ",
	},
};
